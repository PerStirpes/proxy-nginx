FROM node:alpine
LABEL name "nginx proxy"

clean && rm -rf /var/lib/apt/lists/*
COPY index.js .

EXPOSE 3000
CMD node index.js
