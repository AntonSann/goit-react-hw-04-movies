import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import Style from './Navigation.module.css';

const Navigation = () => {
    return (
      <header className={Style.header}>
        <nav>
        <li><NavLink exact className="" activeClassName="" to={routes.home}>HomePage</NavLink></li>
        <li><NavLink to={routes.movies}>MoviesPage</NavLink></li>
      </nav>
      </header>
    )
}
export default Navigation;