FROM traefik:1.6-alpine as traefik


FROM node:8-alpine as build
COPY . /app
WORKDIR /app
RUN yarn install && yarn build --targets node8-linux-x64


# Change to Alpine when you can get it working
FROM centos:latest
COPY --from=build /app/index /heave/index
# Copy traefik config file
COPY ./config.toml /etc/traefik/traefik.toml
# Copy Traefik Binary
COPY --from=traefik /usr/local/bin/traefik /usr/local/bin/traefik
RUN yum install docker -y
# RUN apk update && apk add docker
CMD /bin/sh -c "ls -lh /heave && /heave/index"
