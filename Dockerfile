FROM node:latest

ENV HOME=/home/LineBus

ENV APP=lb-api-data

COPY package.json package-lock.json $HOME/$APP/

WORKDIR $HOME/$APP

RUN npm install --silent --progress=false

COPY . $HOME/$APP