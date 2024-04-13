# Use the official Node.js 16 image as a parent image
FROM node:16

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available) to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Bundle the source code inside the Docker image
COPY . .

# Make port 3000 available to the world outside the container
EXPOSE 3000

# Run the application
CMD [ "node", "server.js" ]
