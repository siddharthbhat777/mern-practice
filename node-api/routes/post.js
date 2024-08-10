const express = require('express');

const route = express.Router();

const postController = require('../controllers/post');

route.get('/get_posts', postController.getPosts);

route.post('/create_post', postController.createPost);

route.get('/get_post_details/:postId', postController.getPostDetails);

route.put('/update_post/:postId', postController.updatePost);

route.delete('/delete_post/:postId', postController.deletePost);

module.exports = route;