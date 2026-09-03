# Cloudflare R2 Data Management Setup (Spring Boot)
This guide walks I through storing and managing a centralized `data.json` file in Cloudflare R2 using Spring Boot, completely bypassing the local `wrangler` CLI restrictions by leveraging Cloudflare's S3-compatible API.

## Step 1: Set Up Cloudflare R2 via the Web Dashboard [x]
Since I cannot use the CLI on my work computer, configure my bucket permissions completely inside my web browser:
- [x] 1. Log into my **Cloudflare Dashboard** and select **R2 Storage** from the sidebar.
- [x] 2. Select my existing bucket or click **Create bucket** to create a dedicated data bucket (e.g., `app-data-bucket`).
- [x] 3. On the right side of the R2 overview panel, click **Manage R2 API Tokens**.
- [x] 4. Click **Create API Token**.
- [x] 5. Name my token, set the permission level to **Edit** (allowing my API to read and overwrite the JSON file), and scope it to my specific bucket.
- [x] 6. Safely copy down the following generated parameters:
   * **Access Key ID**
   * **Secret Access Key**
   * **Jurisdiction-specific Endpoint URL** (formatted as: `https://<account-id>.r2.cloudflarestorage.com`)

## Step 2: Add S3 Client Dependency to Spring Boot [x]
- [x] Open my Java project's `pom.xml` file and append the official AWS S3 software development kit to establish native communication with Cloudflare R2:

```xml
<dependency>
   <groupId>software.amazon.awssdk</groupId>
   <artifactId>s3</artifactId>
   <version>2.25.15</version>
</dependency>
```

## Step 3: Populate Configuration Properties [x]
- [x] Add the following properties to my local `src/main/resources/application.properties` configuration. When deploying my container/runner to Cloudflare later, I will map these exact keys into my container's environment variables:

```properties
cloudflare.r2.endpoint=https://<my-account-id>.r2.cloudflarestorage.com
cloudflare.r2.access-key=<my-access-key-id>
cloudflare.r2.secret-key=<my-secret-access-key>
cloudflare.r2.bucket-name=<my-bucket-name>
```

## Step 4: Create the Configuration Bean [x]
- [x] Create a Java configuration class to map these properties and instantiate the custom S3 client instance:

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

    @Value("\${cloudflare.r2.endpoint}")
    private String endpoint;

    @Value("\${cloudflare.r2.access-key}")
    private String accessKey;

    @Value("\${cloudflare.r2.secret-key}")
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

## Step 5: Build the Data Management Service Layer [x]
- [x] Implement a service layer capable of pulling down the JSON payload, exposing it to my application controllers for Jackson parsing, and putting the modified content back up to overwrite the cloud state:

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

    public DataManagementService(S3Client s3Client, @Value("\${cloudflare.r2.bucket-name}") String bucketName) {
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

## Step 6: Inject Credentials Into my Container [ In Progress ]
- [ ] Pass them as environment variables (never bake them into my image):

```bash
docker run \
  -e R2_ACCESS_KEY_ID=<my-access-key-id> \
  -e R2_SECRET_ACCESS_KEY=<my-secret-access-key> \
  -e R2_ACCOUNT_ID=<my-account-id> \
  -e R2_BUCKET_NAME=<my-bucket-name> \
  my-springboot-image
```

## Step 7: Deployment Setup (Workers Builds) [ In Progress ]
This connects my GitHub or GitLab repo to my Worker. Every push to my production branch triggers Cloudflare to run wrangler deploy in its own environment — including building my Docker image and rolling out container instances.

- [ ] 1. Push my project (Worker code + Dockerfile + wrangler.jsonc) to a GitHub or GitLab repository.
- [ ] 2. In the dashboard, go to my Worker's **Settings** > **Builds** and click **Connect**:
   * Navigate to: `Workers & Pages` → select `my-gallery-app` → `Settings` → `Builds` → `Connect`.
   * Alternatively, use **Import Repository**.
- [ ] 3. Configure the build options:
   * **Production branch**: `main` (or my default branch).
   * **Build command**: Leave empty or use `npm run build` (for the Worker/TS code).
   * **Deploy command**: `npx wrangler deploy` (default — this builds the Dockerfile and deploys everything).
- [ ] 4. Set my secrets via the dashboard instead of using `wrangle secret put`:
   * Go to my **Worker** → **Settings** → **Environment Variables** → Add the following:
      * `R2_ACCESS_KEY_ID` (as a secret/encrypted)
      * `R2_SECRET_ACCESS_KEY` (as a secret/encrypted)
      * `R2_ACCOUNT_ID` (plain text)
      * `R2_BUCKET_NAME` (plain text)
- [ ] 5. Push a commit to trigger the build and deploy.

### Important: Use a Multi-Stage Dockerfile
- [X] The Workers Builds environment has Docker available but doesn't have Java/Maven pre-installed. Use a multi-stage Dockerfile so the Java build happens inside Docker:

```dockerfile
# Stage 1: Build
FROM maven:3.9-eclipse-temurin-21 AS builder
WORKDIR /app
COPY pom.xml .
RUN mvn dependency:go-offline
COPY src ./src
RUN mvn package -DskipTests

# Stage 2: Runtime
FROM eclipse-temurin:21-jre-alpine
COPY --from=builder /app/target/*.jar /app/springboot-api.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/app/springboot-api.jar"]
```

## Last Step: Migration Path to PostgreSQL [ Planned ]
- [ ] By modularizing this configuration within a dedicated Service layer, my core REST endpoints and JSON mapping structures are decoupled from the filesystem. When my work environment constraints alter or Cloudflare's serverless Postgres options are integrated into my stack, I will only replace this single data service with standard Spring Data JPA repository dependencies.
