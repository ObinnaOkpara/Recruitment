var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ExperienceSchema = new Schema({
    candidateId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    employer: {
        type: String,
        required: true
    },
    job_title: {
        type: String,
        required: true
    },
    start_end_date: {
        type: String,
        required: true
    },
    note: {
        type: String,
        required: true
    },
    resumes: [{ type: Schema.Types.ObjectId, ref: 'Resume' }]
});

module.exports = mongoose.model('Experience', ExperienceSchema);