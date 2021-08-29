# Create image based on the official Node 12 image from dockerhub
From node:12-alpine

# Create a directory where our app will be placedRUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Copy dependency definitions
copy package.json /usr/src/app/

# Install dependecies
RUN npm install

# Get all the code needed to run the app
COPY . /usr/src/app

# Expose the port the app runs in
EXPOSE 3000

# Serve the app
CMD ["npm", "start"]

