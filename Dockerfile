# Use the official image as a parent image.
FROM node:16-alpine

# Set the working directory.
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the code to the container
COPY . .

# Build the app
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Run the app
CMD ["npm", "run", "dev"]