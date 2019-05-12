FROM node:10.15

WORKDIR /src

COPY package*.json ./

RUN npm install

COPY app /src

EXPOSE 5000

CMD ["node", "index.js"]