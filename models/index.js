// import all models
const Post = require('./Post');
const User = require('./User');
const Comment = require('./Comment');

// create associations- verify on deletes working correctly
Post.belongsTo(User, {
    foreignKey: 'user_id',
  });
  
User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: "CASCADE"
  });

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
  });

Post.hasMany(Comment, {
    foreignKey: 'post-id',
    onDelete: "CASCADE"
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
  });


User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });






module.exports = { User, Post, Comment };
