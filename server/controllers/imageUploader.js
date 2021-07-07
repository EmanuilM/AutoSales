const {Router} = require('express');
const router = Router();

const upload = require('../config/multer');
const clodinary = require('../config/cloudinary');
const fs = require('fs');
const offersModel = require('../models/offersModel');


router.post('/images' , upload.array('image') , async (req,res) => { 

    const uploader = async (path) => await clodinary.uploads(path, 'Images');

    if(req.method === 'POST') { 
        const urls = [];
        const files = req.files;
        if(!files) { 
            res.status(400).json({message:'There\s no images.Please upload images and try again'});
        }else { 
            for (const file of files) {
                const { path } = file;
                const newPath = await uploader(path);
    
                urls.push(newPath);
                fs.unlinkSync(path);
            }
          
          res.status(200).json({message:'Images are  uploaded successfully' , data: urls});
          //Store ID's to database
          const { data } = urls;
        //   data.forEach(x => offersModel.imageIds.push(x));
        }
    }else { 
        res.status(405).json({message:'Images are not uploaded successfully'});
    }
});

module.exports = router;

