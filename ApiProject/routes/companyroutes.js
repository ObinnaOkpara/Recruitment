var express = require('express');
var router = express.Router();
const Company = require('../models/company');

router.get('/', async (req, res)=>{
    Company.find().then(companies=>{
        res.json({success:true, message:'Successful', data:companies});
    }).catch(err=>{
        res.json({success:false, message:err.message});
    })
})

router.get('/:companyid', async(req, res)=>{
    Company.findById(req.params.companyid).then(company=>{
        res.json({success:true, message:'Successful', data:company});
    }).catch(err=>{
        res.json({success:false, message:err.message});
    })
})

router.post('/', async(req, res)=>{
    const company = new Company({
        name: req.body.name,
        type_of_company: req.body.type_of_company,
        about: req.body.about,
        address: req.body.address,
        email: req.body.email,
        facebook: req.body.facebook,
        google_plus: req.body.google_plus,
        twitter: req.body.twitter,
        pinterest: req.body.pinterest,
        website: req.body.website,
        logo: req.body.logo
    })

    company.save().then(comp=>{
        res.json({success:true, message:'Successful', data:company});
    }).catch(err=>{
        res.json({success:false, message:err.message});
    })
})

router.delete('/:companyid', async (req, res)=>{
    Company.remove({_id: req.params.companyid})
    .then(rtn=>{ res.json({success:true, message:'Successful', data:rtn}); })
    .catch(err=>{ res.json({success:false, message:err.message}); });
    
});

router.patch('/:companyid', async (req, res)=>{
    Company.updateOne({_id: req.params.companyid}, 
        { $set: { 
            name: req.body.name,
            type_of_company: req.body.type_of_company,
            about: req.body.about,
            address: req.body.address,
            email: req.body.email,
            facebook: req.body.facebook,
            google_plus: req.body.google_plus,
            twitter: req.body.twitter,
            pinterest: req.body.pinterest,
            website: req.body.website
        }})
        .then(rtn=>{ res.json({success:true, message:'Successful', data:rtn}); })
        .catch(err=>{ res.json({success:false, message:err.message}); });
    
});

module.exports = router;