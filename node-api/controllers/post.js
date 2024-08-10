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

exports.updatePost = async (req, res, next) => {
    const postId = req.params.postId;
    const { title, content } = req.body;
    try {
        await Post.findByIdAndUpdate(
            postId,
            {
                title,
                content
            }
        );
        /* const post = await Post.findById(postId);
        post.title = title;
        post.content = content;
        await post.save(); */
        res.status(200).json({ message: 'Post with id ' + postId + ' has been updated.' });
    } catch (error) {
        console.log(error);
    }
};

exports.deletePost = async (req, res, next) => {
    const postId = req.params.postId;
    try {
        await Post.findByIdAndDelete(postId);
        res.status(200).json({ message: 'Post with id ' + postId + ' has been deleted.' });
    } catch (error) {
        console.log(error);
    }
};