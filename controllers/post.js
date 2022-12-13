// importing post model
const Post = require('../models/PostModel')

// --------------- CRUD OPERATION FOR SOCILA MEDIA POST --------------------- //

// Create Post method function
const createPost = async(req,res) => {
    try {
        const newPost = new Post(req.body)
        const savedPost = await newPost.save();
        res.status(201).json(savedPost);
    } catch (error) {
        res.status(500).json(error)
    }
}

// Read post method function
const getPost = async(req,res) => {
    const allPost = await Post.find();
    res.status(200).json(allPost);
}

// Updating Post method function
const updatePost = async(req,res) => {
    try {
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId){
            await post.updateOne({$set: req.body});
            res.status(200).json("Updated the post successfully ");
        }else{
            res.status(403).json("You can update only your own post !!!")
        }
    } catch (error) {
            res.status(500).json(error)
    }
}

// Deleting post method function
const deletePost = async(req,res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.userId === req.body.userId) {
            await post.deleteOne();
            res.status(200).json("Deleted the post successfully");
        } else {
          res.status(403).json('You can delete only your own post !!!');
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

// ------XXX------- CRUD OPERATION FOR SOCILA MEDIA POST -----------XXX------- //

module.exports = {getPost,createPost,updatePost,deletePost}