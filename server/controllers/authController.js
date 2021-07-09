const { Router } = require('express');
const router = Router();
const authService = require('../services/authService');
const cfg = require('../config/config');
console.log(cfg.COOKIE_NAME)

router.post('/register', async (req, res) => {
    try {
        const token =  await authService.register(req.body)
        res.status(200).json({isSuccessful : true , token});
    } catch (err) {
        console.log(err)
        res.status(400).json(err);
    }
});


router.post('/login', async (req, res) => {
    try {
        const token = await authService.login(req.body);
        if (process.env.NODE_ENV === "production") {
            res.cookie(cfg.COOKIE_NAME, token, { httpOnly: true, secure: true });
        }else{ 
            res.cookie(cfg.COOKIE_NAME, token, { httpOnly: true });
        }
        res.status(200).json(token);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get('/logout' , (req,res) => { 
    res.clearCookie(cfg.COOKIE_NAME);
});


module.exports = router;