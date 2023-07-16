# syntax=docker/dockerfile:1
#
# Image for build
#
FROM rust:1.70.0-alpine as base

WORKDIR /pro/building

RUN apk add --no-cache musl-dev=1.2.4-r0 npm=9.6.6-r0 && \
    npm i -g tailwindcss && \
    cargo install trunk cargo-make --locked && \
    rustup target add wasm32-unknown-unknown

COPY . /pro/building

RUN cargo make build && \
    cp see.conf dist/

#
# Prod Server Launcher
#
FROM wyhaya/see:latest

WORKDIR /app

COPY --from=base /pro/building/dist .

CMD ["/see", "-c", "see.conf"]
