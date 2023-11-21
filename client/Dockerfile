

#Stage 1
FROM node:18.0.0 as builder
LABEL authors="ibrahim badr"

WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

#Stage 2
FROM nginx:1.19.0
LABEL authors="ibrahim badr"

WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/dist .
ENTRYPOINT ["nginx", "-g", "daemon off;"]