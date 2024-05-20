# Base image
FROM node:lts-alpine AS builder

# Set working directory
RUN rm -rf /usr/src/app/auth
WORKDIR /usr/src/app/auth

# Copy package.json and package-lock.json from root directory
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the entire monorepo to the working directory
COPY . .

# Build the product app
RUN npm run build

# Use a lightweight base image for the runtime environment
FROM node:lts-alpine AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

# Set working directory
WORKDIR /usr/src/app/auth

# Copy package.json and pnpm-lock.yaml from the builder stage
COPY package.json ./

# Install pnpm and production dependencies
RUN npm install

# Copy the built files from the builder stage
COPY --from=builder /usr/src/app/auth/dist ./dist

# Expose the port the app runs on
EXPOSE 3001

# Command to run the application
CMD ["node", "dist/apps/auth/main"]

#docker build ../../ -f Dockerfile -t ncp_auth 