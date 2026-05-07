https://api.gios.gov.pl/pjp-api/swagger-ui/index.html

https://api.gios.gov.pl/pjp-api/v3/api-docs/public-api

npx swagger-typescript-api generate \
-p https://api.gios.gov.pl/pjp-api/v3/api-docs/public-api \
-o ./src/infrastructure/gios-api \
-n gios-api.ts \
--extract-request-params \
--extract-response-body
