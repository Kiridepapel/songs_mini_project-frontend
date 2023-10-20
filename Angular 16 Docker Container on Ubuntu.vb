apt update -y
apt upgrade -y
apt install docker.io

sudo git clone https://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@github.com/KIWI-TEST-INC/spotify-api.git
sudo chmod 755 spotify-api && sudo chown -R www-data:www-data spotify-api/ && cd spotify-api

FROM node:18.16.1
WORKDIR /app
COPY . .
RUN npm install
RUN npm install -g @angular/cli@16.1.4
RUN ng build --configuration production
FROM nginx:latest
COPY --from=0 /app/dist/spotify-api /usr/share/nginx/html

docker build -t angular_img .
docker run -d -p 80:80 --name frontend_container angular_img