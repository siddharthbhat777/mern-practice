import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            try {
                const fetchedPosts = await axios.get('http://localhost:8001/post/get_posts');
                setPosts(fetchedPosts.data.posts);
            } catch (error) {
                console.log(error);
            }
        };
        getPosts();
    }, []);

    return (
        <div>
            {
                posts.map(post => (
                    <div key={post._id}>
                        <span>Post title: {post.title}</span><br />
                        <span>Post content: {post.content}</span>
                        <hr />
                    </div>
                ))
            }
        </div>
    );
};

export default Posts;