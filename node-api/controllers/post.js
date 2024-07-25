const Post = require("../models/post");

exports.getPosts = async (req, res, next) => {
    try {
        const posts = await Post.find();
        res.status(200).json({ message: 'Posts fetched successfully', posts: posts });
    } catch (error) {
        console.log(error);
    }
};

exports.createPost = async (req, res, next) => {
    const title = req.body.title;
    const content = req.body.content;
    try {
        const post = new Post({
            title: title,
            content: content
        });
        await post.save();
        res.status(201).json({ message: 'Created post successfully', post: post });
    } catch (error) {
        console.log(error);
    }
};

exports.getPostDetails = async (req, res, next) => {
    const id = req.params.postId;
    try {
        const post = await Post.findById(id);
        res.status(200).json({ message: 'Data fetched successfully', post: post });
    } catch (error) {
        console.log(error);
    }
};