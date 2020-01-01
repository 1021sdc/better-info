const faker = require('faker');


const generate = (userContext, events, done) => {
    let id = faker.random.number({min: 1, max: 10000000});
    userContext.vars.id = id;
    return done();
}

let titleRandom = ['Perfectly located', 'Light & spacious garden flat', 'Private Modern Guesthouse', 'Ocean View Hideaway', 'Perfect Haven by Golden Gate', 'Private Backyard Cottage', 'Sunny Room Heart of', 'Luxury Gold Coast', 'Central Surfers Studio OceanView', 'Broken Head Bodhi Treehouse', 'Mountain tiny house', 'Blue Mountains Cottage', 'The Copa Cabana', 'The Tree House', 'Stroll Around Victoria Park', 'Entire Home with Opera House views', 'Luxury Apartment in the heart of', 'Stylish inner-city home', 'Little Paradise', 'Stunning River View' ]; 

let roomInfoRandom = ['Private room', 'Entire guesthouse', 'Entire guestsuite', 'Entire House'];

function generateListing(userContext, events, done) {
    let titleRandomArray = faker.random.arrayElement(titleRandom);
    let roomInfoRandomArray = faker.random.arrayElement(roomInfoRandom);
    let hostImage = faker.random.number({min: 1, max: 1001});

    function numberOfGuests() {
        if (roomInfoRandomArray === 'Private room') {
            return 2;
        } else {
            return faker.random.number({min: 3, max: 6});
        }
    }

    function numberOfBedrooms() {
        if (roomInfoRandomArray === 'Private room') {
            return 1;
        } else {
            return faker.random.number({min: 2, max: 6}); 
        }
    }

    function numberOfBaths() {
        if (roomInfoRandomArray === 'Private room') {
            return 1;
        } else {
            return faker.random.number({min: 2, max: 5});
        }
    }
    var bedrooms = numberOfBedrooms();
    let city = faker.address.city();
    let listing = {
        city: city,
        title: `${titleRandomArray} ${city}`,
        hostImage: `https://sdc-info-hosts.s3-us-west-2.amazonaws.com/host/pic${hostImage}.jpg`,
        roomInfo: roomInfoRandomArray,
        numberOfGuests: numberOfGuests(),
        numberOfBedrooms: bedrooms,
        numberOfBeds: bedrooms,
        numberOfBaths: numberOfBaths(),
        isSuperHost: faker.random.number({min: 0, max: 1}),
        isGreatLocation: faker.random.number({min: 0, max: 1}),
        isSparklingClean: faker.random.number({min: 0, max: 1}),
        isGreatCheckIn: faker.random.number({min: 0, max: 1}),
        isSelfCheckIn: faker.random.number({min: 0, max: 1}),
        description: faker.lorem.paragraph() + faker.lorem.paragraph()
    }

    userContext.vars.listing = listing;
    return done();
    // return listing;
}

module.exports = {
    generate,
    generateListing
};
