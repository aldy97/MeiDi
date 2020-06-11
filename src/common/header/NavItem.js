import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    console.log('props.href: ' + props.href);
    console.log('props.selected: /' + props.selected);
  });

  return (
    <NavItemWrapper
      onMouseEnter={handleMouseEvent}
      onMouseLeave={handleMouseEvent}
      className={
        '/' + props.selected === props.href ||
        '/' + props.selected === props.href + '='
          ? 'selected'
          : null
      }
    >
      <div
        onClick={() => {
          window.location.href =
            props.href === '/' ? props.href : `${props.href}/?value=` + 0;
        }}
      >
        {props.item}
      </div>
      {showDropDown(show)}
    </NavItemWrapper>
  );
}

export default NavItem;
