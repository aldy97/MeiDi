import React from 'react';
import { NavItemDropDownWrapper, NavItemDropDownItem } from './style';

const NavItemDropDown = (props) => {
  return (
    <NavItemDropDownWrapper>
      {props.dropdown.map((item, i) => {
        return (
          <NavItemDropDownItem
            className='navitemdropdownitem'
            onClick={() => {
              window.location.href = `${props.href}/?value=` + i;
            }}
          >
            {item}
          </NavItemDropDownItem>
        );
      })}
    </NavItemDropDownWrapper>
  );
};

export default NavItemDropDown;
