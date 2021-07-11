const { Router } = require('express');
const router = Router();
const offerService = require('../services/offersService');
const isAuth = require('../middlewares/isAuthenticated');


router.post('/create', isAuth , async (req, res) => {
    try {
        await offerService.createOffer(req.body , req.user._id);
        res.status(200).end();
    } catch (err) {
        res.status(400).json(err);
    }
});





module.exports = router;