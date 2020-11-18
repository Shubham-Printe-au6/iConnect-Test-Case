const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const companySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
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
        required: true,
        unique: true
    },
    logo: {
        type: String,
        required: true
    },
    states:[
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