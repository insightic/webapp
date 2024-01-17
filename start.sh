#!/bin/bash

: "${MODE:=production}"
echo "App is running $MODE"
cd /app && rm -rf node_modules && rm package-lock.json && npm i && npm run build-only -- --mode $MODE
rm -rf /usr/share/nginx/html && mkdir -p /usr/share/nginx/html
cp -r /app/dist/* /usr/share/nginx/html
nginx -g "daemon off;"
