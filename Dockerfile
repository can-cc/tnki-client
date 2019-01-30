FROM node:8-alpine as builder
COPY . /root/tnki-client
WORKDIR /root/tnki-client
RUN npm install
RUN npm run build

FROM nginx:1.13.3-alpine

## Copy our default nginx config
COPY deploy/nginx/nginx.config /etc/nginx/conf.d/default.conf

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html

## From 'builder' stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=builder /root/tnki-client/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]