const express = require('express');
const { findAllPosts, deletePostById, createNewPost, findAllPostsById } = require('../controllers/postController');
const router = express.Router()


router.post('/new', createNewPost)
router.get('/', findAllPosts)
router.get('/user/:id', findAllPostsById)
router.delete('/delete/:id', deletePostById)
router.patch('/update/:id', )
module.exports = router

