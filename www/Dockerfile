FROM node:10.15.1-alpine AS build

ENV DOCKER=TRUE
ENV NPM_CONFIG_LOGLEVEL error

WORKDIR /app
COPY . /app

# Install app dependencies
RUN npm install
RUN npm run build

FROM nginx:1.17.8-alpine

COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d
EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]
