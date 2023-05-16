import React from 'react';
import style from './PostDetail.module.css';
import { Link } from 'react-router-dom';

const PostDetail = ({post}) => {
  return (
    <div className={style.post_detail}>
      <img src={post.image} alt={post.title} />
      <h2>{post.title}</h2>
      <p className={style.createdby}>{post.createdBy}</p>
      <div className={style.tags}>
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
