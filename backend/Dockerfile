# Use an official Node runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Bundle app source inside Docker image
COPY . .

# Your app binds to port 3000, make sure you expose this port
EXPOSE 3000

# Define command to run the app
CMD ["node", "app.js"]
