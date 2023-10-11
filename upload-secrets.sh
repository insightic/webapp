#!/bin/bash

ENV=staging
SECRET_NAME=$ENV-secret
NAMESPACE=webapp-$ENV
ENV_FILE=.env.$ENV

# Delete current secret
kubectl delete secrets $SECRET_NAME --namespace=$NAMESPACE || true
# Create the secret
kubectl create secret generic $SECRET_NAME --namespace=$NAMESPACE --from-env-file=$ENV_FILE