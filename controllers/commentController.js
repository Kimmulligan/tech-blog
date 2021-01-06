const Post = require("../models/Post");
const { User } = require("../models");
const createNewPost = async (req, res, next) => {
  const { title, content } = req.body;
  const response = await Post.create({
    title,
    content,
    UserId: 1,
  });
  res.json(response);
};
const findAllPosts = async (req, res, next) => {
  const response = await Post.findAll({ include: [User, Post] });
  res.json(response);
};
const findAllPostsById = async (req, res, next) => {
  const response = await Post.findAll({
    where: {
      userId: req.params.id,
    },
  });
  res.json(response);
};

const deletePostById = async (req, res, next) => {
  const response = await Post.destroy({
    where: {
      id: req.params.id,
    },
  });
  if (response > 0) {
    res.json({
      message: `Successfully deleted post with the id ${req.params.id}`,
    });
  } else {
    res.json({ message: `Failed to delete post with the id ${req.params.id}` });
  }
};
const updatePostById = async (req, res, next) => {
  const response = await Post.update({
    where: {
      id: req.params.id,
    },
  });
  if (response > 0) {
    res.json({
      message: `Successfully updated post with the id ${req.params.id}`,
    });
  } else {
    res.json({ message: `Failed to update post with the id ${req.params.id}` });
  }
};
module.exports = {
  createNewPost,
  findAllPosts,
  findAllPostsById,
  deletePostById,
  updatePostById
};