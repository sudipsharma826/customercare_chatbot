# Use the official Node.js 20 image as the base image
# Stage 1: Build the Next.js application
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Accept build arguments
ARG SCALEKIT_ENVIRONMENT_URL
ARG SCALEKIT_CLIENT_ID
ARG SCALEKIT_CLIENT_SECRET
ARG SCALEKIT_REDIRECT_URI
ARG SCALEKIT_LOGOUT_REDIRECT_URI
ARG DATABASE_URL


# Set them as environment variables for build
ENV SCALEKIT_ENVIRONMENT_URL=$SCALEKIT_ENVIRONMENT_URL
ENV SCALEKIT_CLIENT_ID=$SCALEKIT_CLIENT_ID
ENV SCALEKIT_CLIENT_SECRET=$SCALEKIT_CLIENT_SECRET
ENV SCALEKIT_REDIRECT_URI=$SCALEKIT_REDIRECT_URI
ENV SCALEKIT_LOGOUT_REDIRECT_URI=$SCALEKIT_LOGOUT_REDIRECT_URI
ENV DATABASE_URL=$DATABASE_URL


# Copy package.json and package-lock.json
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Production image, copy built assets from builder
# Stage 2: Run the Next.js application
FROM node:20-alpine AS runner
WORKDIR /app

# Accept build arguments for runtime
ARG SCALEKIT_ENVIRONMENT_URL
ARG SCALEKIT_CLIENT_ID
ARG SCALEKIT_CLIENT_SECRET
ARG SCALEKIT_REDIRECT_URI
ARG SCALEKIT_LOGOUT_REDIRECT_URI
ARG DATABASE_URL


# Set them as environment variables for runtime
ENV SCALEKIT_ENVIRONMENT_URL=$SCALEKIT_ENVIRONMENT_URL
ENV SCALEKIT_CLIENT_ID=$SCALEKIT_CLIENT_ID
ENV SCALEKIT_CLIENT_SECRET=$SCALEKIT_CLIENT_SECRET
ENV SCALEKIT_REDIRECT_URI=$SCALEKIT_REDIRECT_URI
ENV SCALEKIT_LOGOUT_REDIRECT_URI=$SCALEKIT_LOGOUT_REDIRECT_URI
ENV DATABASE_URL=$DATABASE_URL


# Install only production dependencies
COPY package.json package-lock.json* ./
RUN npm install --omit=dev

# Copy built application and static files
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.* ./

# Expose port 3000
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]
