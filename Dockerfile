FROM node:14.16.1-alpine3.13

RUN apk add bash curl && \
    curl https://raw.githubusercontent.com/eficode/wait-for/v2.1.3/wait-for --output /usr/bin/wait-for  && \
    chmod +x /usr/bin/wait-for

RUN npm install -g @nestjs/cli

USER node

RUN mkdir -p /home/node/app

WORKDIR /home/node/app

