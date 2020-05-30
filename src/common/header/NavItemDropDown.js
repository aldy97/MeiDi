import React from 'react';
import { NavItemDropDownWrapper, NavItemDropDownItem } from './style';

const NavItemDropDown = (props) => {
  return (
    <NavItemDropDownWrapper>
      {props.dropdown.map((item) => {
        return (
          <NavItemDropDownItem className='navitemdropdownitem'>
            {item}
          </NavItemDropDownItem>
        );
      })}
    </NavItemDropDownWrapper>
  );
};

export default NavItemDropDown;
