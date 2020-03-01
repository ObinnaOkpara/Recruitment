var express = require('express');
var router = express.Router();
const Resume = require('../models/resume');

router.get('/', async (req, res)=>{
    const perPage = 10;
    const curPage = Math.max(1, req.params.p);
    const numToSkip = (curPage-1) * perPage;

    Resume.find()
    .limit(perPage)
    .skip(numToSkip)
    .then(rtn=>{
        res.json({success:true, message:'Successful', data:rtn});
    }).catch(err=>{
        res.json({success:false, message:err.message});
    })
})

router.get('/forcandidate/:candidateid', async(req, res)=>{
    Job.find({candidateId:req.params.candidateid}).then(rtn=>{
        res.json({success:true, message:'Successful', data:rtn});
    }).catch(err=>{
        res.json({success:false, message:err.message});
    })
})

router.get('/:resumeid', async(req, res)=>{
    Job.findById(req.params.resumeid).then(rtn=>{
        res.json({success:true, message:'Successful', data:rtn});
    }).catch(err=>{
        res.json({success:false, message:err.message});
    })
})

router.post('/', async(req, res)=>{
    
const Education = require('../models/education');
const Experience = require('../models/experience');

    const resume = new Resume({
        candidateId: req.body.candidateId,
        name: req.body.name,
        email: req.body.email,
        profession: req.body.profession,
        location: req.body.location,
        minimum_rate: req.body.minimum_rate,
        skill_category: req.body.job_tags,
        skills: req.body.skills,
        urls: req.body.urls,
        resume_content: req.body.resume_content,
        display_picture: req.body.display_picture
    });
    req.body.educationids.forEach(element => {
        resume.educations.push(Education.findById(element));
    });
    req.body.experienceids.forEach(element => {
        resume.experiences.push(Experience.findById(element));
    });


    resume.save().then(rtn=>{
        if (req.body.jobid) {
            const SubmittedResume = require('../models/submittedresume');
            const Job = require('../models/job');
            const sr = new SubmittedResume({
                resume: Resume.findById(rtn._id),
                job: Job.findById(req.body.jobid)
            });
            sr.save().then(srtn=>{
                res.json({success:true, message:'Save and add to job Successful.', data:rtn});
            }).catch(serr=>{
                res.json({success:false, message:'Saved but not added to job. \n\n' + serr.message});
            });
        }
        else{res.json({success:true, message:'Successful', data:rtn});}
    }).catch(err=>{
        res.json({success:false, message:err.message});
    })
})

router.delete('/:resumeid', async (req, res)=>{
    Resume.remove({_id: req.params.resumeid})
    .then(rtn=>{ res.json({success:true, message:'Successful', data:rtn}); })
    .catch(err=>{ res.json({success:false, message:err.message}); });
    
});

router.patch('/:resumeid', async (req, res)=>{
    Resume.updateOne({_id: req.params.resumeid}, 
        { $set: { 
            name: req.body.name,
            email: req.body.email,
            profession: req.body.profession,
            location: req.body.location,
            minimum_rate: req.body.minimum_rate,
            skill_category: req.body.job_tags,
            skills: req.body.skills,
            urls: req.body.urls,
            resume_content: req.body.resume_content,
            display_picture: req.body.display_picture
        }})
        .then(rtn=>{ res.json({success:true, message:'Successful', data:rtn}); })
        .catch(err=>{ res.json({success:false, message:err.message}); });
});

module.exports = router;