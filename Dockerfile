# Use an official Node.js runtime as the base image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app/nodejs last

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the source code to the container
COPY . .

# Expose the port on which the application will run
EXPOSE 3000

# Start the application
CMD ["node", "server.js"]