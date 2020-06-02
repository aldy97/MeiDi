import React, { useState, useEffect } from 'react';
import Content from './Content';
import { connect } from 'react-redux';
import { NavigationWrapper, NavSection, NavItem } from '../styled';

function Navigation(props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    console.log('urlParams: ' + urlParams);
    const myParam = urlParams.get('value');
    console.log('myParam: ' + myParam);
  });

  return (
    <NavigationWrapper>
      <NavSection>
        {props.navigation.map((item) => {
          return (
            <NavItem
              className='navitem'
              key={item.ic}
              onClick={() => {
                setIndex(item.id);
              }}
            >
              {item.title}
            </NavItem>
          );
        })}
      </NavSection>
      <Content index={index}></Content>
    </NavigationWrapper>
  );
}

const mapState = (state) => {
  return { navigation: state.getIn(['about', 'navigation']) };
};

export default connect(mapState, null)(Navigation);
