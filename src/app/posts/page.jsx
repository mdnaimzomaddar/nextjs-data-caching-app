import React from 'react';
import PostCard from '../Components/PostCard';


/*
    * Data loading function or data fetching
    *Post
    *Add
    *Delet
    *Update ---> put & patch
*/

const getPost = async() =>{
    try{
        const ref = await fetch('https://jsonplaceholder.typicode.com/posts', {next:{revalidate: 10}})
        if(!ref.ok){
            throw new Error("Field the fetch post")
        }
    return ref.json()
    }
    catch(error){
        throw new Error("Field the fetch post")
    }
}

const PostPage = async() => {
// const ref = await fetch('https://jsonplaceholder.typicode.com/posts')
// const posts = await ref.json()

    const posts = await getPost()

    return (
        <div>
            <h2>Total Posts: {posts.length}</h2>

            <div className='grid grid-cols-3 gap-4'>
                {posts.map(post => <PostCard key={post.id} post = {post}></PostCard>)}
            </div>
        </div>
    );
};

export default PostPage;