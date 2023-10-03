FROM node:17-alpine

WORKDIR /app/digiwise

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8000

CMD [ "npm", "run", "dev" ]


