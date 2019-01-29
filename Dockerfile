FROM node:8-alpine as builder
COPY . /root/tnki-client
WORKDIR /root/tnki-client
RUN npm install
RUN npm run build

FROM tutum/nginx
RUN rm /etc/nginx/sites-enabled/default
ADD deploy/nginx/sites-enabled/ /etc/nginx/sites-enabled
COPY --from=builder /root/tnki-client/dist /www/public 

CMD ["nginx", "-g", "daemon off;"]