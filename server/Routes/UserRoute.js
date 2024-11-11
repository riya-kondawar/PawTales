const express = require('express')
const router = express.Router()
const {loginUser, signupUser, updateUser, updatePassword} = require('../Controller/UserController')

router.post('/login', loginUser)
router.post('/signup', signupUser)
router.put('/update', updateUser)
router.put('/update-password', updatePassword)

module.exports = router