# Current JSON Server Side TLS Recommendations

The current JSON recommendations can be found at https://github.com/mozilla/ssl-config-generator/tree/master/docs/guidelines 

# Historical JSON Versions of Server Side TLS Recommendations

The `/json` directory in this repo contains the JSON recommendations up to version
5.0 from 2019.

These historical JSON recommendations are tracked in GitHub and hosted in the 
`server-side-tls` AWS S3 bucket hosted in the`infosec-prod` AWS account. That 
S3 bucket is then fronted by AWS CloudFront, also in the `infosec-prod` AWS 
account. The CloudFront distribution `EIB8EDBWWFDDU ` terminates the TLS 
connection at https://statics.tls.security.mozilla.org serving up the content 
from the S3 bucket.

All future recommendation updates should be made in the https://github.com/mozilla/ssl-config-generator/
repository, not here.