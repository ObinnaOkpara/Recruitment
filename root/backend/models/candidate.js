var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CandidateSchema = new Schema({
  fullname: {
    type: String,
    required: true
  },
  email: {
      type: String,
  },
  date: {
      type: Date,
      default: Date.now
  },
});

CandidateSchema.virtual('resumes', {
    ref: 'Resume',
    localField: '_id',
    foreignField: 'candidateId',
    justOne: false // set true for one-to-one relationship
});

CandidateSchema.virtual('educations', {
    ref: 'Education',
    localField: '_id',
    foreignField: 'candidateId',
    justOne: false // set true for one-to-one relationship
});

CandidateSchema.virtual('experiences', {
    ref: 'Experience',
    localField: '_id',
    foreignField: 'candidateId',
    justOne: false // set true for one-to-one relationship
});

module.exports = mongoose.model('Candidate', CandidateSchema);