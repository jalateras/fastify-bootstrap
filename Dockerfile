FROM node:10-alpine

WORKDIR /app

# copy package and install deps
COPY package*.json ./
RUN npm install --production

# copy across the source
COPY . .

# expose a port
EXPOSE 4444

# run the service
CMD ["npm", "start"]