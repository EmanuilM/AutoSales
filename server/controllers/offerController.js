const { Router } = require('express');
const router = Router();
const offerService = require('../services/offersService');
const isAuth = require('../middlewares/isAuthenticated');
const userModel = require('../models/user');


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
        res.status(200).json(offer);
    } catch (err) {
        res.status(400).json(err);
    }
})

router.get('/next' , async (req,res) => { 
    try {
        const offers = await offerService.getNext(Number(req.query.lastOffersID) , req.query.brand , req.query.model );
        res.status(200).json(offers);
    } catch (err) {
        res.status(400).json(err);
        
    }
});

router.post('/edit/:id' , async (req,res) => { 
    try {
        const updatedOffer = await offerService.edit(req.params.id , req.body);
        res.status(200).json(updatedOffer);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/delete/:id' , async (req,res) => { 
    try {
        const result = await offerService.deleteOffer(req.params.id , req.body.imageIds);
        res.status(200).json(result);
} catch (err) {
        res.status(400).json(err);
    }
});

router.get('/search' , async  (req,res) => { 
    try {
        const result = await offerService.simpleSearch(req.query.brand , req.query.model);
        res.status(200).json(result);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get('/lastOffers' , async (req,res) => {
    try {
        const lastOffers =  await offerService.getLastOffers();
        res.status(200).json(lastOffers);
    } catch (err) {
        res.status(400).json(err);
    }
});





module.exports = router;