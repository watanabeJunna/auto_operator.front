FROM node:10.16.2-alpine

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm ci