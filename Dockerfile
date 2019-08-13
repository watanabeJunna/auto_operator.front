FROM node:10.16.2-alpine

WORKDIR /app

COPY package.json
CMD npm i

COPY . .

CMD npm run dev
