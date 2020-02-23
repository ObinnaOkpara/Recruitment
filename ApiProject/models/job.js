var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var JobSchema = new Schema({
    companyId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    type_of_job: {
        //Full-time or part-time
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    salary: {
        type: String
    },
    category: {
        type: String,
        required: true
    },
    job_tags: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    urls: {
        type: String
    },
    date_created: {
        type: Date,
        default: Date.now
    },
    date_expiry: {
        type: Date,
        required: true
    },
});

module.exports = mongoose.model('Job', JobSchema);
