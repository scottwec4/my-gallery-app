#!/usr/bin/env bash
docker run \
  -e R2_ACCESS_KEY_ID="$R2_ACCESS_KEY_ID" \
  -e R2_SECRET_ACCESS_KEY="$R2_SECRET_ACCESS_KEY" \
  -e R2_ACCOUNT_ID="$R2_ACCOUNT_ID" \
  -e R2_BUCKET_NAME="$R2_BUCKET_NAME" \
  my-springboot-image
