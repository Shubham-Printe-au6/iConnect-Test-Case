const router = require('express').Router();

const Company = require('../models/company.model');

// list all companies
router.route('/').get((req, res) => {
    Company.find()
    .then(companies => res.status(200).json(companies))
    .catch(err => res.status(400).json('Error:' + err));
});

// list all companies by company name
router.route('/search/:companyName').get((req, res) => {
    var companyName = req.params.companyName;
    Company.find({
        name: {
            "$regex": companyName,
            "$options": "i"
        }
    })
    .sort({
        name: 1
    })
    .then(companies => res.status(200).json(companies))
    .catch(err => res.status(400).json('Error: ' + err));
});

// create new company
router.route('/add').post((req, res) => {

    const newCompany = new Company(req.body);

    newCompany.save()
    .then(() => res.json('Company added!'))
    .catch(err => {
        res.status(406).json({
            'Company': newCompany,
            'Error': err,
            'message': `Please use a different value for ${Object.keys(err.keyPattern)}`
        })
    } );
});


// // detail one company
router.route('/:id').get((req, res) => {
    Company.findById(req.params.id)
    .then(company => res.json(company))
    .catch(err => res.status(400).json('Error:' + err));
});


// delete one company
router.route('/:id').delete((req, res) => {
    Company.findByIdAndDelete(req.params.id)
    .then(company =>res.json('Company Deleted.'))
    .catch(err => res.status(400).json('Error:' + err));
});


// update one company
router.route('/edit/:id').put((req, res) => { 

    Company.findById(req.params.id)
    .then(company => {
        company.name = req.body.name;
        company.description = req.body.description;
        company.number = req.body.number;
        company.email = req.body.email;
        company.logo = req.body.logo;
        company.states = req.body.states;
        company.cities = req.body.cities;
        
        company.save()
        .then(() => res.json('Company Updated.'))
        .catch(err => res.status(400).json({
            'Company': company,
            'Error': err,
            'message': `Please use a different value for ${Object.keys(err.keyPattern)}`
        }));
    })
    .catch(err => res.status(400).json('Error:' + err));
});

module.exports = router;