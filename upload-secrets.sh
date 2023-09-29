#!/bin/bash

SECRET_NAME=prod-secret
NAMESPACE=webapp-prod
ENV_FILE=.env

# Create the secret
kubectl create secret generic $SECRET_NAME --namespace=$NAMESPACE  --from-env-file=$ENV_FILE