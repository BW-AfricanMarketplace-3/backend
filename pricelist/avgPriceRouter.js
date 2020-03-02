const router = require('express').Router()
const Prices = require('./avgPriceModel')
const authenticate = require('../auth/authenticate-middleware')

router.get('/',authenticate, (req, res) => {
    Prices.find()
    .then(category => {
      res.json(category);
    })
    .catch(err => {
      res.status(500).json({ message: 'Unable to retrieve average prices.' });
    });
});

router.post('/',authenticate, (req, res) => {
    const priceData = req.body;
  
    Prices.add(priceData)
    .then(category=> {
      res.status(201).json(category);
    })
    .catch (err => {
        console.log(err)
      res.status(500).json({ message: 'Unalbe to create new average price.' });
    });
});

router.delete('/:id',authenticate, (req, res) => {
    const { id } = req.params;
  
    Prices.remove(id)
    .then(deleted => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res.status(404).json({ message: 'Could not find category with given id' });
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to delete the price category' });
    });
});

module.exports = router