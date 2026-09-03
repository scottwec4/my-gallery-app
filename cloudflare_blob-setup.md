# Cloudflare Images Integration Progress Log

## Status Overview
* **Completed Steps**: Step 2 (API Token Generation) and Step 3 (Media Upload).
* **Current Blockers**: Local environment URLs are failing because `<YOUR_HASH>` placeholders are not yet swapped with the real account hash. Code deployment is pending database integration.

---

## Step One: Integration Steps Tracker [x]

- [x] **1. Setup Cloudflare Images**
  * Created Cloudflare account and navigated to the Images dashboard.
- [x] **2. Generate API Token**
  * Created token with `Cloudflare Images: Edit` permissions.
- [x] **3. Upload Media Assets**
  * Uploaded artwork files programmatically/via dashboard to:
    `https://api.cloudflare.com/client/v4/accounts/<ACCOUNT_ID>/images/v1`
- [x] **4. Configure Delivery URLs (Pending Fix)**
  * Template format to implement: `https://imagedelivery.net/<ACCOUNT_HASH>/<IMAGE_ID>/<VARIANT_NAME>`
  * *Current local error lines:*
    ```json
    "imageUrl": "https://imagedelivery.net/<YOUR_HASH>/dramaLady/public",
    "thumbnailUrl": "https://imagedelivery.net/<YOUR_HASH>/dramaLady/thumbnail"
    ```

---

## Step Two: Environment Credentials & Testing [x]

### Active Account Details
* **Account ID:** ``
* **Token Name:** `yellow-tree-6764`
* **API Token:** ``
* **Account Delivery Hash:** `` *(Extracted from production delivery example)*

### Step Three: setup production Target URL Template in ng client [x]
```text
https://imagedelivery.net/_zf5eeRnASutTkDnEPUG-Q/<image_id>/<variant_name>
```

### Step Four: Verification Command [x]
Run this CURL request to verify that your API token is active and working properly:
```bash
curl -X GET "https://api.cloudflare.com/client/v4/accounts/value/tokens/verify" \
     -H "Authorization: Bearer test"
```

---

## Planned PostgreSQL [ Planned ]
**Goal:** Capture the unique image IDs returned by Cloudflare, store them inside a PostgreSQL database alongside photo details, package them into a clean JSON payload, 
and serve them to an Angular client application for dynamic image rendering.
