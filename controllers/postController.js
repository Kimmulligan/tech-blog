const Post = require("../models/Post");
const { User } = require("../models");
const { options } = require("../models/Post");
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
  const response = await Post.findAll({ limit: 100, include: User });
  res.json(response);
};
const getEditPage = async (req, res, next) => {
  const editPostId =  req.params.id
  const response = await Post.findByPk(editPostId, {raw: true});
  res.render('edit', {
    post: response
  });
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
const getNewPage = async (req, res, next) => {
  //const response = await Post.create({title:});
  res.render('newPost');
}
const createPost = async (req, res, next) => {
  const id = req.session.user_id
  console.log('inside createPost');
  console.log(id);
  const response = await Post.create({title:req.body.title, content:req.body.content, UserId:req.session.user_id}, {raw: true});
  res.json(response)
}
const editPostById = async (req, res, next) => {
  console.log(req.params.id);
  const {title, content} = req.body
  const response = await Post.update(
   {title, content}, {where: {id: req.params.id}}
  );
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
  editPostById,
  getEditPage,
  getNewPage,
  createPost
};
