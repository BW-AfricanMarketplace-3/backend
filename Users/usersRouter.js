const router = require('express').Router()
const Users = require('./usersModel')
const Listings = require('../listings/listingsModel')
const authenticate = require('../auth/authenticate-middleware')

router.get('/', (req, res) => {
    Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => {
      res.status(500).json({ message: 'Unable to retrive users.' });
    });
});

router.get('/:id',authenticate, (req,res)=>{
    Users.findById(req.params.id)
    .then(user=>{
        res.status(200).json(user)
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({message: 'Unable to get user.'})
    })
})

router.get('/:id/listings',authenticate,(req, res) => {
    Listings.findBy(req.params.id, 'user_id')
        .then(listings => {
            res.status(200).json(listings);
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: 'Unable to retrieve users listings.'})
        })
})

router.post('/:id/listings',authenticate,(req, res) => {
    Listings.add(req.params.id,req.body)
        .then(listing => {
            res.status(200).json(listing);
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: 'Unalbe to create new listing.'})
        })
})

router.put('/:id/listings/:id',authenticate,(req, res) => {
    Listings.updateListing(req.body, req.params.id)
        .then(updated => {
            res.status(200).json({message: 'The listing has been updated!'});
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: 'Unable to update listing'})
        })
})

router.delete('/:id/listings/:id',authenticate,(req, res) => {
    Listings.remove(req.params.id)
        .then(num => {
            if(num > 0) {
                res.status(200).json({message: 'Listing removed!' });
            } else {
                res.status(404).json({ message: 'Listing could not be found.' })
            }
        })
        .catch(err => {console.log(err)
        res.status(500).json({message: 'Unable to remove listing'})})
})

module.exports = router 