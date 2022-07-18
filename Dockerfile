FROM node:18-alpine3.14
WORKDIR /my-app
ENV PATH="./node_module/.bin:$PATH"
COPY . .
RUN npm run build
CMD ["npm", "start"]
