var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EducationSchema = new Schema({
    candidateId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    school_name: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    qualification: {
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

module.exports = mongoose.model('Education', EducationSchema);