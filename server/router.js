const { Router } = require('express');
const router = Router();

const authController = require('./controllers/authController');
const offerController = require('./controllers/offerController');
const imageUploader = require('./controllers/imageUploader');

router.use('/auth' , authController);
router.use('/offers' , offerController);
router.use('/upload' , imageUploader);



module.exports = router;