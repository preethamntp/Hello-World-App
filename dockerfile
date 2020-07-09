FROM node:latest
RUN mkdir -p /usr/src/ap
WORKDIR /usr/src/app
COPY . .
EXPOSE 8000
CMD ["npm", "test"]