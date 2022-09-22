import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar = () => {
  return (
    <nav className={ styles.navbar}>
        <NavLink to='/' className={ styles.brand}>
            Mini <span>Blog</span>
        </NavLink>
        <ul className={ styles.links_list}>
            <li>
                {/* end significa o exat do react antigo */}
                <NavLink end to='/' className={({ isActive }) => (isActive ? styles.active : styles.inactive)}>
                     Home
                </NavLink>
            </li>
            <li>
                <NavLink to='/about' className={({ isActive }) => (isActive ? styles.active : "")}>
                    Sobre            
                </NavLink>
            </li>
        </ul> 
    </nav>
  )
}


// consertar isactive

export default NavBar