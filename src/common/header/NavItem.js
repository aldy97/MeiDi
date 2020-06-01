import React, { useState } from 'react';
import NavItemDropDown from './NavItemDropDown';
import { NavItemWrapper } from './style';

function NavItem(props) {
  const [show, setShow] = useState(false);

  const handleMouseEvent = () => {
    setShow(!show);
  };

  const showDropDown = (show) => {
    if (show) {
      return <NavItemDropDown dropdown={props.dropdown}></NavItemDropDown>;
    }
  };

  return (
    <NavItemWrapper
      onMouseEnter={handleMouseEvent}
      onMouseLeave={handleMouseEvent}
      className='navitemwrapper'
      onClick={() => {
        window.location.href = props.href;
      }}
    >
      {props.item}
      {showDropDown(show)}
    </NavItemWrapper>
  );
}

export default NavItem;
