FROM node:8 as build
COPY . /app
WORKDIR /app
RUN yarn install && yarn build --targets node8-linux-x64


FROM alpine:latest
COPY --from=build /app/index /heave/index
ENTRYPOINT [ "/heave/index" ]
