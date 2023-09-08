const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// relationship User -> Post
User.hasMany(Post, {
    foreignKey: 'user_id',
  });
  
  // relationship Post -> User
  Post.belongsTo(User, {
    foreignKey: 'user_id',
  });
  
  // relationship User -> Comment
  User.hasMany(Comment, {
      foreignKey: 'user_id',
    });
  
  // relationship Comment -> User
  Comment.belongsTo(User, {
      foreignKey: 'user_id',
    });  
  
    // relationship Post -> Comment
  Post.hasMany(Comment, {
      foreignKey: 'post_id',
    });
  
  // relationship Comment -> Post
  Comment.belongsTo(Post, {
      foreignKey: 'post_id',
    }); 
  
  
  
  module.exports = { User, Post, Comment };