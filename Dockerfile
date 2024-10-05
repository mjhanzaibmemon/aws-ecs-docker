# Base image
FROM node:14

# Working directory
WORKDIR /usr/src/app

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the application code
COPY . .

# Expose port 3000
EXPOSE 3000

# Command to start the app
CMD ["node", "index.js"]
