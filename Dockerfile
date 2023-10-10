
# Start with the official NGINX image
FROM nginx

# Copy the built files from the dist directory
COPY ./dist /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/nginx.conf
