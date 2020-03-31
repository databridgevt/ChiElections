# User node 13.10 and with the alpine distro for smallest image size
FROM node:13.10-alpine

# Set the user to be non-root
USER node 
RUN mkdir -p /home/node/app
WORKDIR /home/node/app

# Expose port, by default 3000
ARG PORT=3000
EXPOSE $PORT

# Install Dependencies
COPY package*.json ./
RUN npm ci --no-optional

# Update path to include node_modules
ENV PATH ./node_modules/.bin/:$PATH

# How Docker determines if a container is still running
COPY ./healthcheck.js .
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 CMD [ "node", "./healthcheck.js" ]

# Copy Compiled Source code
COPY dist dist

CMD ["node", "dist/main.js"]