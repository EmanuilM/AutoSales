const { Router } = require('express');
const router = Router();
const userService = require('../services/userService');


router.get('/currentUser', async (req, res) => {
    try {
        const currentUser = await userService.getCurrentUser(req.headers.referer.split('/details/')[1]);
        res.status(200).json(currentUser)


    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;