# этап сборки
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# этап production
FROM nginx:stable-alpine as production-stage
WORKDIR /app
COPY --from=build-stage /app/dist /usr/share/nginx/html
RUN echo 'server { listen 80; server_name _ default_server; root /usr/share/nginx/html; location / { try_files $uri $uri/ /index.html; } }' > /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
