var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ResumeSchema = new Schema({
    candidateId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    profession: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    minimum_rate: {
        type: String
    },
    skill_category: {
        type: String
    },
    skills: {
        type: String
    },
    urls: {
        type: String
    },
    display_picture: {
        type: String
    },
    resume_content: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },

});

ResumeSchema.virtual('attachments', {
    ref: 'Attachment',
    localField: '_id',
    foreignField: 'resumeId',
    justOne: false // set true for one-to-one relationship
});

ResumeSchema.virtual('educations', {
    ref: 'Education',
    localField: '_id',
    foreignField: 'resumes',
    justOne: false // set true for one-to-one relationship
});

ResumeSchema.virtual('experiences', {
    ref: 'Experience',
    localField: '_id',
    foreignField: 'resumes',
    justOne: false // set true for one-to-one relationship
});

ResumeSchema.virtual('submittedResumes', {
    ref: 'SubmittedResume',
    localField: '_id',
    foreignField: 'resume',
    justOne: false // set true for one-to-one relationship
});

module.exports = mongoose.model('Resume', ResumeSchema);