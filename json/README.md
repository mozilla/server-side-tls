# JSON Versions of Server Side TLS Recommendations

The JSON recommendations are tracked in github and hosted in AWS CloudFront in the infosec-prod AWS account. CloudFront terminates the TLS connection and sources the data from the `server-side-tls` AWS S3 bucket also hosted in the infosec-prod AWS account.

# Deployment method

To deploy the JSON recommendations after they have been updated in the repo, run the following command with a user or role with sufficient permissions to write to the `server-side-tls` bucket in infosec-prod

```
aws s3 cp server-side-tls-conf.json s3://server-side-tls/ --acl public-read
aws s3 cp server-side-tls-conf-4.0.json s3://server-side-tls/ --acl public-read
```

Or upload the updated files through the AWS web console.