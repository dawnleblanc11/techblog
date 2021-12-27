// import all models
const BPost = require('./BPost');
const User = require('./User');
const Comment = require('./Comment');

// create associations
User.hasMany(BPost, {
  foreignKey: 'user_id'
});

BPost.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});


Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Comment.belongsTo(BPost, {
  foreignKey: 'post_id',
  onDelete: 'SET NULL'
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

BPost.hasMany(Comment, {
  foreignKey: 'post_id'
});

module.exports = { User, BPost, Comment };
