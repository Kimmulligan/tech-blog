const express = require('express');
const router = express.Router()
const getRegisterPage = require("../controllers/userController").getRegisterPage

const registerUser = require("../controllers/userController").registerUser
const loginUser = require("../controllers/userController").loginUser

router.post('/register', registerUser)
router.get('/', getRegisterPage)

router.post('/login', loginUser)

module.exports = router

