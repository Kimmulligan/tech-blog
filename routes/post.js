const withAuth = require('../utils/auth')
const express = require('express');
const { findAllPosts, deletePostById, createNewPost, findAllPostsById, getEditPage, editPostById, getNewPage, createPost} = require('../controllers/postController');
const router = express.Router()


//router.post('/new', createNewPost)
router.get('/', findAllPosts)
router.get('/user/:id', findAllPostsById)
router.delete('/delete/:id', deletePostById)
router.patch('/edit/:id', editPostById)
router.get('/edit/:id', withAuth, getEditPage)
router.get('/new', withAuth, getNewPage)
router.post('/new', createPost)
module.exports = router

