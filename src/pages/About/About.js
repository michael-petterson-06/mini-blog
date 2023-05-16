import React from 'react';
import { Link } from 'react-router-dom';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.about}>
        <h2>Sobre o mini <span>Blog</span></h2>
        <p>Projeto desenvolvido com React no front-end e Firebase no back-end</p>
        <Link to='/posts/create' className='btn'>
          Criar posts
        </Link>
    </div>
    
  )
}

export default About