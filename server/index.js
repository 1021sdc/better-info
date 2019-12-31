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
            isSelfCheckin: info.rows[0].isselfcheckin,
            description: info.rows[0].description,
            listingId: info.rows[0].listingid,
          });
        }
      })
})



// db.findOne({id: req.params.id}).exec((err, docs) => {
//     if (err) {
//       res.status(500).send();
//     } else {
//       res.status(200).send(docs);
//     }
//   })

// app.post('/listings/', (req, res) => {
//   const host = req.body;
//   if(host.id) {
//     db.create(host, (err) => {
//       if(err) {
//         console.log(err);
//         res.status(500).send();
//       } else {
//         res.status(201).send();
//       }
//     });
//   } else {
//     res.status(500).send();
//   }
// });

// app.put('/listings/:id', (req, res) => {
//   db.findOneAndUpdate({id: req.body.id}, req.body, (err) => {
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
