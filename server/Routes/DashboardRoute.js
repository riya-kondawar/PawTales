const express = require('express');
const router = express.Router();
const {userRegistration, petTypes} = require('../Controller/Dashboard')

router.get('/user-registrations', userRegistration)
router.get('/pet-types', petTypes)

module.exports = router