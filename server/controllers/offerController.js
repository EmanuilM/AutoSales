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





module.exports = router;