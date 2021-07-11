const { Router } = require('express');
const router = Router();

const authController = require('./controllers/authController');
const offerController = require('./controllers/offerController');

router.use('/api/auth' , authController);
router.use('/api/offers' , offerController);



module.exports = router;