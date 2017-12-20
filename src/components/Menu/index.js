import React from 'react';
import PropTypes from 'prop-types';

import menuItems from './menu-items';

const Menu = ({ activeMenu }) => {
  const menuItemsToRender = menuItems.map(item => (
    <li>
      <a className={activeMenu === item ? 'is-active' : ''}>{item}</a>
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

Menu.propTypes = {
  activeMenu: PropTypes.string.isRequired
};

export default Menu;