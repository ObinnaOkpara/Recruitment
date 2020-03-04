var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SubmittedResumeSchema = new Schema({
    resume: { type: Schema.Types.ObjectId, ref: 'Resume' },
    job: { type: Schema.Types.ObjectId, ref: 'Job' }
});


module.exports = mongoose.model('SubmittedResume', SubmittedResumeSchema);