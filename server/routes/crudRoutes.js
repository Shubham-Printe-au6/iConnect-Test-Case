const router = require('express').Router();

const Company = require('../models/company.model');

// list all companies
router.route('/').get((req, res) => {
    Company.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error:' + err));
});


// create new company
router.route('/add').post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = req.body.duration;
    const date = req.body.date;
    const newCompany = new Company({
        username,
        description,
        duration,
        date
    });

    newCompany.save()
    .then(() => res.json('Company added!'))
    .catch(err => res.status(400).json({
        'Company': newCompany,
        'Error': err.message
    }));
});

// // detail one exercise
// router.route('/:id').get((req, res) => {
//     Company.findById(req.params.id)
//     .then(exercise => res.json(exercise))
//     .catch(err => res.status(400).json('Error:' + err));
// });

// // delete one exercise
// router.route('/:id').delete((req, res) => {
//     Company.findByIdAndDelete(req.params.id)
//     .then(exercise =>res.json('Company Deleted.'))
//     .catch(err => res.status(400).json('Error:' + err));
// });


// // update one exercise
// router.route('/update/:id').post((req, res) => {

//     Company.findById(req.params.id)
//     .then(exercise => {
//         exercise.username = req.body.username;
//         exercise.description = req.body.description;
//         exercise.duration = Number(req.body.duration);
//         exercise.date = Date.parse(req.body.date);
        
//         exercise.save()
//         .then(() => res.json('Company Updated.'))
//         .catch(err => res.status(400).json('Error: ' + err));
//     })
//     .catch(err => res.status(400).json('Error:' + err));
// });

module.exports = router;