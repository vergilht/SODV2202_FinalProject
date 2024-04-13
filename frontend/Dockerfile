# Step 1: Build the React application
FROM node:16 as build

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the source code of the application
COPY . .

# Build the application to the build folder
RUN npm run build

# Step 2: Serve the application from Nginx
FROM nginx:stable-alpine

# Copy the build output to replace the default nginx contents.
COPY --from=build /usr/src/app/build /usr/share/nginx/html

# Expose port 80 to the outside once the container has launched
EXPOSE 80

# No need to specify CMD because the base image already has an entrypoint set to run Nginx
