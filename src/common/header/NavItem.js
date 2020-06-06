import React, { useState } from 'react';
import NavItemDropDown from './NavItemDropDown';
import { NavItemWrapper } from './style';

function NavItem(props) {
  const [show, setShow] = useState(false);

  const showDropDown = (show) => {
    if (show) {
      return <NavItemDropDown dropdown={props.dropdown} href={props.href} />;
    }
  };

  const handleMouseEvent = () => {
    setShow(!show);
  };

  return (
    <NavItemWrapper
      onMouseEnter={handleMouseEvent}
      onMouseLeave={handleMouseEvent}
      className='navitemwrapper'
      onClick={() => {}}
    >
      {props.item}
      {showDropDown(show)}
    </NavItemWrapper>
  );
}

export default NavItem;
