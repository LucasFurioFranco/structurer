FROM node:latest

RUN apt update -y
RUN apt upgrade -y
RUN apt install nano -y

RUN mkdir -p app

COPY . /app

WORKDIR /app

RUN ./git_config.sh

RUN npm install

RUN npm install -g nodemon

EXPOSE 7050

CMD [ "nodemon", "index.js" ]
