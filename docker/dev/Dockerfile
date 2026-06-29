# Use Node.js 24
FROM node:24

# Create app directory
WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Expose the application port
EXPOSE 5501

# Start the development server
CMD ["npm", "run", "dev"]