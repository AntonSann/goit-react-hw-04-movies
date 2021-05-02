import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import Navigation from '../Navigation/Navigation';

const AppBar = () => {
    return (
      <header>
        <nav>
        <Navigation/>
      </nav>
      </header>
    )
}
export default AppBar;