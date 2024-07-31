import React, { useState } from 'react';
import './CreatePost.css';
import axios from 'axios';

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
            title,
            content
        };
        try {
            await axios.post('http://localhost:8001/post/create_post', data);
            setTitle('');
            setContent('');
        } catch (error) {
            console.log(error);
        }
    };

    const handleTitle = (event) => { // 1st way
        setTitle(event.target.value);
    };
    
    return (
        <div className='createComponent'>
            <div>CreatePost</div>
            <form className='inputLayout' onSubmit={handleSubmit}>
                <span>Title:</span>
                <input type="text" value={title} onChange={handleTitle} />
                <span>Content:</span>
                <input type="text" value={content} onChange={(event) => setContent(event.target.value)} /> {/* 2nd way */}
                <br />
                <button type='submit' className='createButton'>Create</button>
            </form>
        </div>
    );
};

export default CreatePost;