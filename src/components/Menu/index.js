import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import menuItems from './menu-items';

const Menu = ({ activeMenu }) => {
  const menuItemsToRender = menuItems.map((item, index) => (
    <li key={index}>
      <NavLink to={`/${item}`} activeClassName="is-active">{item}</NavLink>
    </li>
  ));

  return (
    <Fragment>
      <aside className="menu is-hidden-touch">
        <ul className="menu-list">
          {menuItemsToRender}
        </ul>
      </aside>
    </Fragment>
  );
}

export default Menu;