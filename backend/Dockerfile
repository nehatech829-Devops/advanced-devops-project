# Base image
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json .

RUN npm install

# Copy rest of the app
COPY . .

# Expose port
EXPOSE 3000

# Start server
CMD ["node","server.js"]
