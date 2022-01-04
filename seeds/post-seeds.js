const { Post } = require('../models');

const postdata = [
  {
    title: 'Post 1 Donec posuere metus vitae ipsum.',
    content: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    user_id: 10
  },
  {
    title: 'Post 2 Morbi non quam nec dui luctus rutrum.',
    content: 'Donec posuere metus vitae ipsum',
    user_id: 8
  },
  {
    title: 'Post 3 Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    content: 'Donec dapibus',
    user_id: 1
  },
  {
    title: 'Post 4 Nunc purus.',
    content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit',
    user_id: 4
  },
  {
    title: 'Post 5 Pellentesque eget nunc.',
    content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
