# User node 13.10 and with the alpine distro for smallest image size
FROM node:13.10-alpine

# Install NPM modules build dependencies
RUN apk --no-cache --virtual build-dependencies add \
    python \
    make \
    g++

# Set a working directory
RUN mkdir -p /home/node/app
WORKDIR /home/node/app

# Expose port, by default 3000
ARG PORT=3000
EXPOSE $PORT

# Install Dependencies
COPY package*.json ./
RUN npm ci --no-optional

# Remove Previous Build Dependencies
RUN apk del build-dependencies

# Update path to include node_modules
ENV PATH ./node_modules/.bin/:$PATH

# Copy src, Should I build src before building a container?
COPY . .

# How Docker determines if a container is still running
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 CMD [ "node", "./healthcheck.js" ]

# Build src
RUN npm run build

# Set the user to be non-root
USER node 
CMD ["node", "dist/main.js"]