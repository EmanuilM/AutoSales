const cloudinary = require("cloudinary").v2;


module.exports = (req, res, next) => {
    if (!req.user) {
        cloudinary.api.delete_resources(req.body.imageIds);
        return res.status(401).json({message : "Unauthorized"});
    } 
    next();
}