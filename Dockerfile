# Base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json ./
RUN npm install -g live-server

# Copy remaining app files
COPY . .

# Expose port
EXPOSE 8080

# Start the app with live-server
CMD ["live-server", "--port=8080", "--host=0.0.0.0", "--no-browser"]
