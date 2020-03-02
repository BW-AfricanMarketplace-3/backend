const router = require('express').Router()

const Listings = require('./listingsModel')

router.get('/', (req, res) => {
    Listings.find()
    .then(listing => {
      res.json(listing);
    })
    .catch(err => {
      res.status(500).json({ message: 'Unable to retrieve listings.' });
    });
});

router.get('/:id',(req,res)=>{
    Listings.findById(req.params.id)
    .then(log => {
        res.status(200).json(log);
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Unable to retrieve listings' });
    })
});

module.exports = router 