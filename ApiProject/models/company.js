var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CompanySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    type_of_company: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    logo: {
        type: String
    },
    facebook: {
        type: String
    },
    google_plus: {
        type: String
    },
    twitter: {
        type: String
    },
    pinterest: {
        type: String
    },
    website: {
        type: String
    },
});

CompanySchema.virtual('jobs', {
    ref: 'Job',
    localField: '_id',
    foreignField: 'companyId',
    justOne: false // set true for one-to-one relationship
});

module.exports = mongoose.model('Company', CompanySchema);