const { Router } = require('express');
const router = Router();
const offerService = require('../services/offersService');

router.post('/create', async (req, res) => {
    try {
        await offerService.createOffer(req.body);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get('/all', async (req, res) => {
    try{
  
        res.json(await offerService.getAllOffers());
    }catch(err) { 
        console.log(err);
    }
});

module.exports = router;