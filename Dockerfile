FROM node:18.16.1
WORKDIR /app
COPY . .
RUN npm install -g npm@9.8.1
RUN npm install -g @angular/cli@16.1.4
RUN ng build --configuration production
FROM nginx:latest
COPY --from=0 /app/dist/spotify-api /usr/share/nginx/html