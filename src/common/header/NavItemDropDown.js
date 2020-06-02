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
              window.location.href = '/about/?value=' + i;
              console.log('current index is: ' + i);
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
