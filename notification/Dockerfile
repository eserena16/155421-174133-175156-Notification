FROM node:lts-alpine

WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 8090
CMD [ "node", "app.js" ]