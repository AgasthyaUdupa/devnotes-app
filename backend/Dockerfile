# Use Node.js base image
FROM node:18

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Copy rest of the code
COPY . .

# App runs on port 5000
EXPOSE 5000

# Start the app
CMD ["npm", "start"]
