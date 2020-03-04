var express = require('express');
var router = express.Router();
const Job = require('../models/job');

router.get('/', async (req, res)=>{
    const searchQuery = req.params.s;
    const locationQuery = req.params.l;
    const perPage = 10;
    const curPage = Math.max(1, req.params.p);
    const numToSkip = (curPage-1) * perPage;

    if (searchQuery && locationQuery) {
        Job.find({title: {"$regex": searchQuery, "$options": "i"}, 
                    location: {"$regex": locationQuery, "$options": "i"}})
        .limit(perPage)
        .skip(numToSkip)
        .sort('-date_created')
        .then(jobs=>{
            res.json({success:true, message:'Successful', data:jobs});
        }).catch(err=>{
            res.json({success:false, message:err.message});
        })
    }else if(searchQuery){
        Job.find({title: {"$regex": searchQuery, "$options": "i"}})
        .limit(perPage)
        .skip(numToSkip)
        .sort('-date_created')
        .then(jobs=>{
            res.json({success:true, message:'Successful', data:jobs});
        }).catch(err=>{
            res.json({success:false, message:err.message});
        })
    }else if(locationQuery){
        Job.find({location: {"$regex": locationQuery, "$options": "i"}})
        .limit(perPage)
        .skip(numToSkip)
        .sort('-date_created')
        .then(jobs=>{
            res.json({success:true, message:'Successful', data:jobs});
        }).catch(err=>{
            res.json({success:false, message:err.message});
        })
    }else{
        Job.find()
        .limit(perPage)
        .skip(numToSkip)
        .sort('-date_created')
        .then(jobs=>{
            res.json({success:true, message:'Successful', data:jobs});
        }).catch(err=>{
            res.json({success:false, message:err.message});
        })
    }
})

router.get('/recent', async (req, res)=>{
    Job.find().sort('-date_created').limit(5).then(jobs=>{
        res.json({success:true, message:'Successful', data:jobs});
    }).catch(err=>{
        res.json({success:false, message:err.message});
    })
})

router.get('/forcompany/:companyid', async(req, res)=>{
    Job.find({companyId:req.params.companyid}).then(companies=>{
        res.json({success:true, message:'Successful', data:companies});
    }).catch(err=>{
        res.json({success:false, message:err.message});
    })
})

router.get('/:jobid', async(req, res)=>{
    Job.findById(req.params.jobid).then(job=>{
        res.json({success:true, message:'Successful', data:job});
    }).catch(err=>{
        res.json({success:false, message:err.message});
    })
})

router.post('/', async(req, res)=>{
    const job = new Job({
        companyId: req.body.companyId,
        title: req.body.title.toLowerCase(),
        type_of_job: req.body.type_of_job,
        location: req.body.location.toLowerCase(),
        salary: req.body.salary,
        category: req.body.category,
        job_tags: req.body.job_tags,
        description: req.body.description,
        urls: req.body.urls,
        date_expiry: req.body.date_expiry
    })

    job.save().then(rtn=>{
        res.json({success:true, message:'Successful', data:rtn});
    }).catch(err=>{
        res.json({success:false, message:err.message});
    })
})

router.delete('/:jobid', async (req, res)=>{
    Job.remove({_id: req.params.jobid})
    .then(rtn=>{ res.json({success:true, message:'Successful', data:rtn}); })
    .catch(err=>{ res.json({success:false, message:err.message}); });
    
});

router.patch('/:jobid', async (req, res)=>{
    Job.updateOne({_id: req.params.jobid}, 
        { $set: { 
            companyId: req.body.companyId,
            title: req.body.title,
            type_of_job: req.body.type_of_job,
            location: req.body.location,
            salary: req.body.salary,
            category: req.body.category,
            job_tags: req.body.job_tags,
            description: req.body.description,
            urls: req.body.urls,
            date_created: req.body.date_created,
            date_expiry: req.body.date_expiry
        }})
        .then(rtn=>{ res.json({success:true, message:'Successful', data:rtn}); })
        .catch(err=>{ res.json({success:false, message:err.message}); });
    
});

module.exports = router;