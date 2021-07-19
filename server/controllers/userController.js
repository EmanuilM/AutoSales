const { Router } = require('express');
const router = Router();
const userService = require('../services/userService');


router.get('/creatorData', async (req, res) => {
    try {
        const creatorData = await userService.getCreatorData(req.headers.referer.split('/details/')[1]);
        res.status(200).json(creatorData);


    } catch (err) {
        res.status(400).json(err);
    }
});

router.get('/currentUser' , async (req,res) => { 
        if(req.user) { 
            const currentUser =  await userService.getCurrentUserData(req.user._id);
            res.status(200).json(currentUser);
        }
})

module.exports = router;