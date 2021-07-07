const clodinary = require('cloudinary');
const config = require('./config');

clodinary.config({
    cloud_name : config.CLOUD_NAME,
    api_key : config.CLOUDINARY_API_KEY,
    api_secret : config.CLOUDINARY_API_SECRET,
})


exports.uploads = (file,folder) => { 
    return new Promise(resolve => { 
        clodinary.uploader.upload(file,(result) => { 
            resolve({
                url:result.url,
                id:result.public_id,
            })
        }),{
            resource_type: "auto",
            folder : folder,
        }
    })
}