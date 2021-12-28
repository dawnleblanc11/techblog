const { Post } = require('../models');

const postdata = [
  {
    title: 'Post 1 Donec posuere metus vitae ipsum.',
    post_text: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    user_id: 10
  },
  {
    title: 'Post 2 Morbi non quam nec dui luctus rutrum.',
    post_text: 'Donec posuere metus vitae ipsum',
    user_id: 8
  },
  {
    title: 'Post 3 Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    post_text: 'Donec dapibus',
    user_id: 1
  },
  {
    title: 'Post 4 Nunc purus.',
    post_text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit',
    user_id: 4
  },
  {
    title: 'Post 5 Pellentesque eget nunc.',
    post_text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
