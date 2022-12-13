const express = require('express');
const {getPost, createPost, updatePost, deletePost} = require('../controllers/post');
const router = express.Router();

//------------ CRUD operation API'S-------------//

// Reading Post method
router.get('/', getPost)

// Creating  post method
router.post('/',createPost)

// Updating  post method
router.put('/:id', updatePost)

// Deleting post method
router.delete('/:id', deletePost)

//-----xxx----- CRUD operation API'S----xxx-----//

module.exports = router