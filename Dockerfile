FROM node:16 as build

WORKDIR /app

COPY package.json \
    package-lock.json ./

RUN npm ci --force

COPY . .

RUN npm t

CMD ["/bin/bash"]

