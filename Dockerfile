FROM mhart/alpine-node:latest

ADD package.json package.json
RUN npm install --production
ADD . .

CMD ["npm", "start"]
