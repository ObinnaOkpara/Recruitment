var express = require('express');
var router = express.Router();

router.post('/picture', (req, res)=>{
    if(req.files.dp){
        const file = req.files.dp;
        if(file.mimetype === 'image/png' || file.mimetype === 'image/jpg'){
            const fname = new Date().getTime() + file.name;
            file.mv('/uploads/' + fname, function(err, result){
                if(err) {
                    res.json({success:false, message:err});
                }else{
                    res.json({success:true, message:'upload successful', data: fname});
                }
            });
        }else{
            res.json({success:false, message:'file type not accepted'});
        }
    }else{
        res.json({success:false, message:'file not found'});
    }
})

module.exports = router;