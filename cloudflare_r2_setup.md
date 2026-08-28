# Cloudflare R2 Data Management Setup (Spring Boot)

This guide walks you through storing and managing a centralized `data.json` file in Cloudflare R2 using Spring Boot, completely bypassing the local `wrangler` CLI restrictions by leveraging Cloudflare's S3-compatible API.

## Step 1: Set Up Cloudflare R2 via the Web Dashboard
Since you cannot use the CLI on your work computer, configure your bucket permissions completely inside your web browser:
1. Log into your **Cloudflare Dashboard** and select **R2 Storage** from the sidebar.
2. Select your existing bucket or click **Create bucket** to create a dedicated data bucket (e.g., `app-data-bucket`).
3. On the right side of the R2 overview panel, click **Manage R2 API Tokens**.
4. Click **Create API Token**.
5. Name your token, set the permission level to **Edit** (allowing your API to read and overwrite the JSON file), and scope it to your specific bucket.
6. Safely copy down the following generated parameters:
   * **Access Key ID**
   * **Secret Access Key**
   * **Jurisdiction-specific Endpoint URL** (formatted as: `https://<account-id>.r2.cloudflarestorage.com`)

## Step 2: Add S3 Client Dependency to Spring Boot
Open your Java project's `pom.xml` file and append the official AWS S3 software development kit to establish native communication with Cloudflare R2:

```xml
<dependency>
    <groupId>software.amazon.awssdk</groupId>
    <artifactId>s3</artifactId>
    <version>2.25.15</version> 
</dependency>
```

## Step 3: Populate Configuration Properties
Add the following properties to your local `src/main/resources/application.properties` configuration. When deploying your container/runner to Cloudflare later, you will map these exact keys into your container's environment variables:

```properties
cloudflare.r2.endpoint=https://YOUR_ACCOUNT_ID.r2.cloudflarestorage.com
cloudflare.r2.access-key=YOUR_ACCESS_KEY_ID
cloudflare.r2.secret-key=YOUR_SECRET_ACCESS_KEY
cloudflare.r2.bucket-name=app-data-bucket
```

## Step 4: Create the Configuration Bean
Create a Java configuration class to map these properties and instantiate the custom S3 client instance:

```java
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import software.amazon.awssdk.auth.credentials.AwsBasicCredentials;
import software.amazon.awssdk.auth.credentials.StaticCredentialsProvider;
import software.amazon.awssdk.regions.Region;
import software.amazon.awssdk.services.s3.S3Client;
import java.net.URI;

@Configuration
public class CloudflareR2Config {

    @Value("${cloudflare.r2.endpoint}")
    private String endpoint;

    @Value("${cloudflare.r2.access-key}")
    private String accessKey;

    @Value("${cloudflare.r2.secret-key}")
    private String secretKey;

    @Bean
    public S3Client s3Client() {
        return S3Client.builder()
                .endpointOverride(URI.create(endpoint))
                .credentialsProvider(StaticCredentialsProvider.create(
                        AwsBasicCredentials.create(accessKey, secretKey)))
                .region(Region.US_EAST_1) // Cloudflare R2 ignores region codes, but SDK requires a value
                .build();
    }
}
```

## Step 5: Build the Data Management Service Layer
Implement a service layer capable of pulling down the JSON payload, exposing it to your application controllers for Jackson parsing, and putting the modified content back up to overwrite the cloud state:

```java
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import software.amazon.awssdk.core.ResponseBytes;
import software.amazon.awssdk.core.sync.RequestBody;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.model.GetObjectRequest;
import software.amazon.awssdk.services.s3.model.GetObjectResponse;
import software.amazon.awssdk.services.s3.model.PutObjectRequest;
import java.nio.charset.StandardCharsets;

@Service
public class DataManagementService {

    private final S3Client s3Client;
    private final String bucketName;
    private final String fileName = "data.json"; 

    public DataManagementService(S3Client s3Client, @Value("${cloudflare.r2.bucket-name}") String bucketName) {
        this.s3Client = s3Client;
        this.bucketName = bucketName;
    }

    // 1. READ the JSON file from Cloudflare
    public String readJsonData() {
        try {
            GetObjectRequest getObjectRequest = GetObjectRequest.builder()
                    .bucket(bucketName)
                    .key(fileName)
                    .build();

            ResponseBytes<GetObjectResponse> objectBytes = s3Client.getObjectAsBytes(getObjectRequest);
            return objectBytes.asString(StandardCharsets.UTF_8);
        } catch (Exception e) {
            // Fallback: If file doesn't exist yet, return an empty array/object standard syntax
            return "[]";
        }
    }

    // 2. WRITE/UPDATE the JSON file back to Cloudflare
    public void saveJsonData(String updatedJsonContent) {
        PutObjectRequest putObjectRequest = PutObjectRequest.builder()
                .bucket(bucketName)
                .key(fileName)
                .contentType("application/json")
                .build();

        s3Client.putObject(putObjectRequest, RequestBody.fromString(updatedJsonContent, StandardCharsets.UTF_8));
    }
}
```

## Migration Path to PostgreSQL
By modularizing this configuration within a dedicated Service layer, your core REST endpoints and JSON mapping structures are decoupled from the filesystem. When your work environment constraints alter or Cloudflare's serverless Postgres options are integrated into your stack, you will only replace this single data service with standard Spring Data JPA repository dependencies.
