const express = require('express');
const router = express.Router()
const getRegisterPage = require("../controllers/userController").getRegisterPage
const withAuth = require('../utils/auth')
const registerUser = require("../controllers/userController").registerUser
const loginUser = require("../controllers/userController").loginUser
const getLoginPage = require("../controllers/userController").getLoginPage
const logOutUser = require("../controllers/userController").logOutUser
const getDashboardPage = require("../controllers/userController").getDashboardPage
router.get ('/dashboard', withAuth, getDashboardPage)
router.post('/register', registerUser)
router.get('/register', getRegisterPage)
router.get('/login', getLoginPage)
router.post('/login', loginUser)
router.post("/logout", withAuth, logOutUser)
module.exports = router

