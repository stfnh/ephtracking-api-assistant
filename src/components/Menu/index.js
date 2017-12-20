import React from 'react';
import { NavLink } from 'react-router-dom';

import menuItems from './menu-items';

const Menu = ({ activeMenu }) => {
  const menuItemsToRender = menuItems.map((item, index) => (
    <li key={index}>
      <NavLink to={`/${item}`} activeClassName="is-active">{item}</NavLink>
    </li>
  ));

  return (
    <aside className="menu">
      <ul className="menu-list">
        {menuItemsToRender}
      </ul>
    </aside>
  );
}

export default Menu;