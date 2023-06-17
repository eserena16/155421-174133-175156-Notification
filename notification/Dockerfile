FROM node:lts-alpine

WORKDIR /notification
COPY package.json .
RUN npm install
COPY . .
EXPOSE 8090
CMD npm start