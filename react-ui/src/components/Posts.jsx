import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [postDetails, setPostDetails] = useState(null);
    const [refresh, setRefresh] = useState(false);
    const [updateLayout, setUpdateLayout] = useState(false);

    const [updatedTitle, setUpdatedTitle] = useState(postDetails?.title);
    const [updatedContent, setUpdatedContent] = useState(postDetails?.title);

    useEffect(() => {
        const getPosts = async () => {
            try {
                const fetchedPosts = await axios.get('http://localhost:8001/post/get_posts');
                setPosts(fetchedPosts.data.posts);
                setRefresh(false);
            } catch (error) {
                console.log(error);
            }
        };
        getPosts();
    }, [refresh]);

    const handleDetails = async (id) => {
        try {
            const post = await axios.get('http://localhost:8001/post/get_post_details/' + id);
            setPostDetails(post.data.post);
        } catch (error) {
            console.log(error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete('http://localhost:8001/post/delete_post/' + id);
            setRefresh(true);
        } catch (error) {
            console.log(error);
        }
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        const data = {
            title: updatedTitle,
            content: updatedContent
        };
        try {
            await axios.put('http://localhost:8001/post/update_post/' + postDetails?._id, data);
            setRefresh(true);
            setUpdateLayout(false);
            setPostDetails(null);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            {
                postDetails &&
                <div>
                    <span>Post Details</span>
                    <div>
                        <span>{postDetails?.title}</span> <br />
                        <span>{postDetails?.content}</span>
                        <button onClick={() => handleDelete(postDetails?._id)}>Delete</button>
                        <button onClick={() => setUpdateLayout(true)}>Update Details</button>
                    </div><br /><br />
                </div>
            }
            {
                updateLayout &&
                <div>
                    <span>Update Layout</span>
                    <form onSubmit={(e) => handleUpdate(e)}>
                        <input type="text" defaultValue={postDetails?.title} onChange={(e) => setUpdatedTitle(e.target.value)} />
                        <input type="text" defaultValue={postDetails?.content} onChange={(e) => setUpdatedContent(e.target.value)} />
                        <button onClick={() => setUpdateLayout(false)}>Cancel</button>
                        <button type='submit'>Save</button>
                    </form>
                </div>
            }
            {
                posts.map(post => (
                    <div key={post._id} style={{ cursor: 'pointer' }} onClick={() => handleDetails(post._id)}>
                        <span>Post title: {post.title}</span><br />
                        <hr />
                    </div>
                ))
            }
        </div>
    );
};

export default Posts;