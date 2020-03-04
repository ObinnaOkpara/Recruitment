var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AdminSchema = new Schema({
  lastname: {
    type: String,
    required: true
  },
  othernames: {
    type: String
  },
  position: {
    type: String,
    required: true
  },
  date: {
      type: Date,
      default: Date.now
  },
});

module.exports = mongoose.model('Admin', AdminSchema);