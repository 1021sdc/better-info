# Listings Module

## SDC README

CRUD ROUTES:

GET ('/listings/:id')
- express route which serves up one listing info object
POST ('/listings')
- express route which accepts an object to be added to the listing db
PUT ('/listings/:id')
- update listings with given id with the request body
DELETE ('/listings/:id')
- delete the database entry with the given request param id






## Older FEC

> Listing Description module for a short term rental housing app

![](Listings.gif)

## Table of Contents
1. <a href="#how_to_use">How To Use</a>
2. <a href="#requirements">Requirements</a>
3. <a href="#related_projects">Related Projects</a>
## <a id="how_to_use">How To Use</a>
```
# clone this repository
$ git clone https://github.com/hacker-home/Airbnb-info.git

# install dependencies
$ npm install

# seed database
$ npm run seed

# compile/transpile files with webpack
$ npm run react-dev
```

## <a id="requirements">Requirements</a>
* [npm](https://www.npmjs.com/)
* [Node.js](https://nodejs.org/en/download/)
* [Git](https://git-scm.com/)

## <a id="related_projects">Related Projects</a>
* https://github.com/hacker-home/Airbnb-photos
* https://github.com/hacker-home/Airbnb-booking
* https://github.com/hacker-home/Airbnb-reviews
* https://github.com/hacker-home/Airbnb-more-homes

