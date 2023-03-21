# Re Generates the client library in the frontend project

java -jar ./swagger-codegen-cli.jar generate -i ./public/swagger/swagger.yaml -l typescript-angular -o ../frontend/src/api --api-package "blog-api" --additional-properties ngVersion=10.0.0,providedInRoot=true,supportsES6=true,modelPropertyNaming=original,npmName="blog-api",sortParamsByRequiredFlag=true
cd ../frontend./sanitize-swagger.sh