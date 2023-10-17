# Version of node
FROM node:alpine
# Directory destination
WORKDIR /app
# Copy the package.json files to docket
COPY package*.json .
# Install dependencies only prod dependencies
RUN npm ci --only=production
# Copy all the project to Docker
COPY . .
# Create a build
RUN npm run build
# Set the port 
EXPOSE 3000
# Run an especific command in CLI 
CMD ["npm", "start"]

# Terminal commands
# docker run -d -p 3000:3000 jcarlosrom97/name
# docker build -t jcarlosrom97/name
# docker image ls
# docker push jcarlosrom97/cra