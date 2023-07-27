FROM node:18.16.0-alpine3.17

RUN ln -s /lib/libc.musl-x86_64.so.1 /lib/ld-linux-x86-64.so.2

RUN apk update

RUN apk --no-cache add build-base

ENV PYTHONUNBUFFERED=1
RUN apk add --update --no-cache python3 \
    && ln -sf python3 /usr/bin/python \
    && python3 -m ensurepip \
    && pip3 install --no-cache --upgrade pip setuptools

WORKDIR /home/node/app

COPY package*.json .

COPY . .

RUN npm i

RUN npm install -E --save-optional @next/swc-linux-x64-gnu
