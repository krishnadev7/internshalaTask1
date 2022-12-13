// importing post model
const Post = require('../models/PostModel');

// --------------- CRUD OPERATION FOR SOCILA MEDIA POST --------------------- //

// Create Post method function
const createPost = async (req, res) => {
  try {
    const newPost = new Post(req.body);
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Read post method function
const getPost = async (req, res) => {
  const allPost = await Post.find();
  res.status(200).json(allPost);
};

// Updating Post method function
const updatePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.updateOne({ $set: req.body });
      res.status(200).json('Updated the post successfully ');
    } else {
      res.status(403).json('You can update only your own post !!!');
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// Deleting post method function
const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.deleteOne();
      res.status(200).json('Deleted the post successfully');
    } else {
      res.status(403).json('You can delete only your own post !!!');
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
// ------XXX------- CRUD OPERATION FOR SOCILA MEDIA POST -----------XXX------- //

// -------------- Like and disliking method function ---------------//

const likePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({ $push: { likes: req.body.userId } });
      res.status(200).json('You liked the post');
    } else {
      await post.updateOne({ $pull: { likes: req.body.userId } });
      res.status(200).json('You diliked the post');
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// ----xxx------- Like and disliking method function -----xxx-------//

// --------------- Commenting the post -------------//
const commentPost = async(req,res) => {
    try {
        const comment = {
            text : req.body.text,
            userId : req.body.userId
        }
        const post = await Post.findById(req.params.id);
        await post.updateOne({$push: {comments: comment}})
        res.status(200).json("You commented on this post")
    } catch (error) {
        res.status(500).json(error)
    }
}
// -----xxx-------- Commenting the post -----xxx------//

module.exports = { getPost, createPost, updatePost, deletePost, likePost,commentPost};
