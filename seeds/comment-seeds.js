const { Comment } = require('../models');

const commentdata = [
  
  {
    comment_text: 'Comment 1 for Post 2 Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    user_id: 8,
    post_id: 2
  },
  {
    comment_text: 'Comment 2 for Post 4 Curabitur convallis.',
    user_id: 6,
    post_id: 4
  },
  {
    comment_text: 'Comment 3 for Post 1 Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    user_id: 4,
    post_id: 1
  },
  {
    comment_text: 'Comment 4 for Post 2 Morbi non quam nec dui luctus rutrum.',
    user_id: 3,
    post_id: 2
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
