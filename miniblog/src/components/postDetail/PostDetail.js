import React from 'react';
import style from './PostDetail.module.css';
import { Link } from 'react-router-dom';

const PostDetail = ({post}) => {
    
    console.log(post)
  return (
    <div>
      <img src={post.image} alt={post.title} />
      <h2>{post.title}</h2>
      <p>{post.createdBy}</p>
      <div>
        {post.tags.map((tag, index) => (
            <p key={`${tag}${index}`}><span>#</span>{tag}</p>
        ))}
      </div>
      <Link to={`/posts/${post.id}`} className='btn btn-outline'>
        ler
      </Link>
    </div>
  )
}

export default PostDetail
