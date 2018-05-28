FROM traefik:1.6-alpine as traefik

FROM alpine:latest

# Copy config file
COPY ./config.toml /etc/traefik/traefik.toml
# Copy Traefik
COPY --from=traefik /usr/local/bin/traefik /usr/local/bin/traefik

ENTRYPOINT [ "traefik" ]
