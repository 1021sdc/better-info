# Build image from:
FROM node:10.17.0-alpine

# Make a folder in image for app's src code
RUN mkdir -p /src/app

# Tell container where code lives
WORKDIR /src/app

# What src code needs to be copied, and where?
COPY . /src/app

# App dependencies to be installed?
RUN npm install

# What port will the container talk to the outside world on
EXPOSE 3002

# Run script to start app
CMD ["npm", "start"]