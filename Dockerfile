FROM node:8-alpine as builder
COPY . /root/tnki-client
WORKDIR /root/tnki-client
RUN npm install
RUN npm run build

FROM nginx:1.13.11-alpine
COPY deploy/nginx/sites-enabled/tnki /etc/nginx/nginx.conf
COPY --from=builder /root/tnki-client/dist /www/public 
