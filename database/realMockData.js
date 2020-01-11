const faker = require('faker');
const fs = require('fs');

let titleRandom = ['Perfectly located', 'Light & spacious garden flat', 'Private Modern Guesthouse', 'Ocean View Hideaway', 'Perfect Haven by Golden Gate', 'Private Backyard Cottage', 'Sunny Room Heart of', 'Luxury Gold Coast', 'Central Surfers Studio OceanView', 'Broken Head Bodhi Treehouse', 'Mountain tiny house', 'Blue Mountains Cottage', 'The Copa Cabana', 'The Tree House', 'Stroll Around Victoria Park', 'Entire Home with Opera House views', 'Luxury Apartment in the heart of', 'Stylish inner-city home', 'Little Paradise', 'Stunning River View' ]; 

let roomInfoRandom = ['Private room', 'Entire guesthouse', 'Entire guestsuite', 'Entire House'];

// function booleanGenerator() {
//     return Math.random() >= 0.5;
// }

function generateListing() {
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
        hostimage: `https://sdc-info-hosts.s3-us-west-2.amazonaws.com/host/pic${hostImage}.jpg`,
        roominfo: roomInfoRandomArray,
        numberofguests: numberOfGuests(),
        numberofbedrooms: bedrooms,
        numberofbeds: bedrooms,
        numberofbaths: numberOfBaths(),
        issuperhost: faker.random.number({min: 0, max: 1}),
        isgreatlocation: faker.random.number({min: 0, max: 1}),
        issparklingclean: faker.random.number({min: 0, max: 1}),
        isgreatcheckin: faker.random.number({min: 0, max: 1}),
        isselfcheckin: faker.random.number({min: 0, max: 1}),
        description: faker.lorem.paragraph() + faker.lorem.paragraph()
    }
    return listing;
}
// function generateListings() {
//     let listings = [];
//     for (let id=0; id <= 10000000; id++) {
//         let listing = generateListing();
//         // listing.id = id;
//         listings.push(listing);
//     }
//     return listings;
// }


// let dbData = generateListings();

// (async () => {

//     for(let i= 0; i <= 10; i++) {
//         let dbData = [generateListing()];
//         const csv = new ObjectsToCsv(dbData);
//         await csv.toDisk('./data2.csv', {append: true});

//     }


//     console.log('done');
// })();

const writeListings = fs.createWriteStream('./data.csv', {flags: 'a'});

function seed(writer, encoding, callback) {
    // let i = 10000000;
    let i = 10;
    let listingid = 0;
    function write () {
        let ok = true;
        do {
            i -= 1;
            listingid += 1;
            let dbData = generateListing();
            dbData.listingid = listingid; // remember to remove from script when recreating db info on EC2, decreases load in time to postgres, also remember to add in listingid col after adding into table
            let data = `${dbData.listingid},${dbData.city}, ${dbData.description},${dbData.hostimage},${dbData.isgreatcheckin},${dbData.isgreatlocation},${dbData.isselfcheckin},${dbData.issparklingclean},${dbData.issuperhost},${dbData.numberofbaths},${dbData.numberofbedrooms},${dbData.numberofbeds},${dbData.numberofguests},${dbData.roominfo},${dbData.title}\n`;
            if(i === 0) {
                writer.write(data, encoding, callback);
            } else {
                ok = writer.write(data, encoding);
            }
        } while (i > 0 && ok);
        if( i > 0) {
            writer.once('drain', write);
        }
    }
    write();
}

seed(writeListings, 'utf-8', () => {
    writeListings.end();
});
