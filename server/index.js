const nr = require('newrelic');
const express = require('express');
const app = express(); 
const bodyParser = require('body-parser')
const db = require('../database/index.js');
const cors = require('cors');
const port = 3002;

app.use(cors());
app.use(express.static(__dirname + '/../client/dist'));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/listings/:id', function(req, res) {
      db.query('SELECT * FROM listings WHERE listingid = $1', [req.params.id], (err, info) => {
        if (err) {
          console.log(err);
          res.status(500).send();
        } else {
          res.send({
            city: info.rows[0].city,
            title: info.rows[0].title,
            hostImage: info.rows[0].hostimage,
            roomInfo: info.rows[0].roominfo,
            numberOfGuests: info.rows[0].numberofguests,
            numberOfBedrooms: info.rows[0].numberofbedrooms,
            numberOfBaths: info.rows[0].numberofbaths,
            numberOfBeds: info.rows[0].numberofbeds,
            isSuperHost: info.rows[0].issuperhost,
            isGreatCheckIn: info.rows[0].isgreatcheckin,
            isSparklingClean: info.rows[0].issparklingclean,
            isGreatLocation: info.rows[0].isgreatlocation,
            isSelfCheckIn: info.rows[0].isselfcheckin,
            description: info.rows[0].description,
            listingId: info.rows[0].listingid,
          });
        }
      })
})

app.post('/listings/', (req, res) => {
  const insert = 'INSERT INTO listings(city, title, hostimage, roominfo, numberofguests, numberofbedrooms, numberofbaths, numberofbeds, issuperhost, isgreatcheckin, issparklingclean, isgreatlocation, isselfcheckin, description) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)';
  const values = [req.body.listing.city, req.body.listing.title, req.body.listing.hostImage, req.body.listing.roomInfo, req.body.listing.numberOfGuests, req.body.listing.numberOfBedrooms, req.body.listing.numberOfBaths, req.body.listing.numberOfBeds, req.body.listing.isSuperHost, req.body.listing.isGreatCheckIn, req.body.listing.isSparklingClean, req.body.listing.isGreatLocation, req.body.listing.isSelfCheckIn, req.body.listing.description];
  db.query(insert, values)
  .then( () => res.status(201).send())
  .catch( (err) => {
    console.log(err);
    res.status(500).send();
  })
});

// app.put('/listings/:id', (req, res) => {
//   db.findOneAndUpdate({id: req.body.listing.id}, req.body, (err) => {
//     if(err) {
//       res.status(500).send();
//     } else {
//       res.status(201).send();
//     }
//   });
// });

// app.delete('/listings/:id', (req, res) => {
//   db.findOneAndDelete({id: req.params.id}, (err) => {
//     if(err) {
//       res.status(500).send();
//     } else {
//       res.status(200).send();
//     }
//   })
// })


app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = app;
