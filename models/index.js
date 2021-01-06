const User = require('./User');
const Comment = require('./Comment');
const Post = require('./Post');

Post.belongsTo(User);
User.hasOne(Post);

Post.hasMany(Comment);
Comment.belongsTo(Post);

Comment.belongsTo(User);
User.hasMany(Comment);

module.exports = { User, Comment, Post };
