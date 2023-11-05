# Use an official Node.js runtime as a base image
FROM node:18.8.0

# Set the working directory in the container
WORKDIR C:/Users/223068950/Desktop/golang-angular/frontend
# Copy the application source code to the container
COPY ./package.json .
RUN export no_proxy="${no_proxy%,.cloud.ge.health.com}"

# # Specify the command to run your application
# CMD ["npm", "start", "ng serve -o", "go run main.go"]
RUN npm config set registry https://hc-us-east-aws-artifactory.cloud.health.ge.com/artifactory/api/npm/npm-gehc-ux-all
# RUN export no_proxy=$no_proxy,.cloud.health.ge.com
RUN npm install -g @angular/cli

# Install project dependencies
RUN npm install --legacy-peer-deps

# Build the Angular app
RUN ng build --prod

# Expose the port the app will run on
EXPOSE 80

# Start the Angular app
CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "80",]
