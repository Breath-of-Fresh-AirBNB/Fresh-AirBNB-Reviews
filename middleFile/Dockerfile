# Image I want to start building on

FROM node:14

# Make a folder where my app's source code can live

RUN mkdir -p /src/app

# Tell my container where your app's source code will live

WORKDIR /src/app

# What source code do you want to copy and where to put it

COPY . .

#Install Dependencies

RUN npm install

# What port will the container talk to the outside world with

EXPOSE 3003

# How do you start your app

CMD ["npm", "run", "start"]

