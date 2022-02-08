// express router
const router = require('express').Router();
// required mongoose model
let User = require('../models/user.model');
// first end point that handle incoming http get request
router.route('/').get((req, res) => {
    User.find()
        .then(() => res.json(users))
        .catch(err => res.status(400).json('Error; ' + err));
});

// incoming http post request
router.route('/add').post((req, res) => {
    const username = req.body.username;
    
    const newUser = new User({username});
// save to the database
    newUser.save()
    .then(() => res.json('User added'))
    .catch(err => res.status(400).json('Error: ' +err));
});

module.exports = router;