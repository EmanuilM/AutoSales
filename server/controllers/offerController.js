const { Router } = require('express');
const router = Router();
const offerService = require('../services/offersService');
const isAuth = require('../middlewares/isAuthenticated');


router.post('/create', isAuth , async (req, res) => {
    try {
       const createdOffer = await offerService.createOffer(req.body , req.user._id);
        res.status(200).json(createdOffer._id);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get('/catalogue' , async (req,res) => { 
    try {
        const allOffers = await offerService.getAllOffers();
        res.status(200).json(allOffers);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get('/catalogue/:id' , async (req,res) => { 
    try {
        const offer = await offerService.getDataById(req.params.id);
        console.log(offer);
        res.status(200).json(offer);
    } catch (err) {
        res.status(400).json(err);
    }
})

router.get('/next' , async (req,res) => { 
    try {
        const offers = await offerService.getNext(Number(req.query.lastPostId));
        res.status(200).json(offers);
        console.log(req.query);
    } catch (err) {
        res.status(400).json(err);
        
    }
});




module.exports = router;