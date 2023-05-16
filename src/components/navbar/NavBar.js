import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuthentication } from '../../hooks/useAuthentication';
import { useAuthValue } from '../../context/AuthContext';
import styles from './NavBar.module.css';

const NavBar = () => {

  const { user } = useAuthValue();
  const {logout } =useAuthentication();

  return (
    <nav className={ styles.navbar}>
        <NavLink to='/mini-blog' className={ styles.brand}>
            Mini <span>Blog</span>
        </NavLink>
        <ul className={ styles.links_list}>
            <li>
                {/* end significa o exat do react antigo */}
                <NavLink end to='/mini-blog' className={({ isActive }) => (isActive ? styles.active : "")}>
                     Home
                </NavLink>
            </li>
            {!user && (
                <>
                    <li>
                        <NavLink to='/login' className={({isActive}) => (isActive ? styles.active : "")}>
                            Entrar
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/register' className={({isActive}) => (isActive ? styles.active : '')}>
                            Cadastrar
                        </NavLink>
                    </li>
                </>                    
            )}
            {user && (
                <>
                    <li>
                        <NavLink to='/posts/create' className={({isActive}) => (isActive ? styles.active : "")}>
                            Novo post
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard' className={({isActive}) => (isActive ? styles.active : '')}>
                            Dashboard
                        </NavLink>
                    </li>
                </>                    
            )}
            <li>
                <NavLink to='/about' className={({ isActive }) => (isActive ? styles.active : "")}>
                    Sobre            
                </NavLink>
            </li>
            {user && (
                <li>
                    <button onClick={logout}>Sair</button>
                </li>
            )}
        </ul> 
    </nav>
  )
}


// consertar isactive

export default NavBar