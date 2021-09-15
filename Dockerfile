FROM node:lts-alpine3.13
RUN  apk add bash
WORKDIR /usr/src/app
COPY . /usr/src/app
EXPOSE 3000/tcp
CMD "node" "server.js"

