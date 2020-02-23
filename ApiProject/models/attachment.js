var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AttachmentSchema = new Schema({
    resumeId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    path: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Attachment', AttachmentSchema);