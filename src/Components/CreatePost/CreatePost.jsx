import React, { useState } from 'react';


const CreatePost = (props) => {

    const [Name, setName] = useState('');
    const [Post, setPost] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newEntry = {
            Name: Name,
            Post: Post
        };
        props.addNewEntryProperty(newEntry)

    }

    return ( 
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type ='Name' value={Name} onChange={(event) => setName(event.target.value)}  />

            <label>Post</label>
            <input type ='Post' value={Post} onChange={(event) => setPost(event.target.value)} />

            <button type='submit'>Create</button>
        </form>
     );
}
 
export default CreatePost;