# Build the React app
FROM node:20-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Set up Nginx to serve the built app
FROM nginx:alpine

# Create a custom Nginx configuration
RUN echo 'server {\
  listen       80;\
  listen  [::]:80;\
  server_name  default_server;\
\
  location / {\
    root   /usr/share/nginx/html;\
    index  index.html index.htm;\
    try_files $uri $uri/ /index.html;\
  }\
\
  error_page   500 502 503 504  /50x.html;\
  location = /50x.html {\
    root   /usr/share/nginx/html;\
  }\
}' > /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
