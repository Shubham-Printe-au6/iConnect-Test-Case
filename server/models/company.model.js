const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const companySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    logo: {
        type: String,
        required: true
    },
    state:[
        {
            type: String,
            required: true
        }
    ],
    cities: [
        {
            type: String,
            required: true
        }
    ]
},
{
    timestamps: true
});

const Company = mongoose.model('Company', companySchema);
module.exports = Company;