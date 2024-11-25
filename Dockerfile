FROM node:21

WORKDIR /app

# Install app dependencies
COPY . /app
RUN cd /app && npm install -g npm@latest
RUN cd /app && npm install

ENV TOKEN=0
ENV APPLICATIONID=0
ENV MONGODBURL=0
ENV GITBOOK_API_TOKEN=gb_api_IEcgXulpkTGIJ1aQeSjuAlkvoBcaFtmbze9BeSH6

RUN npm run build

CMD [ "npm", "run", "start" ]