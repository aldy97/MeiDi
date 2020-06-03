import React, { useState, useEffect } from 'react';
import Content from './Content';
import { connect } from 'react-redux';
import { NavigationWrapper, NavSection, NavItem } from '../styled';

function Navigation(props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('value');
    document.title = '关于美地';
    setIndex(myParam);
  });

  return (
    <NavigationWrapper>
      <NavSection>
        {props.navigation.map((item) => {
          return (
            <NavItem
              className='navitem'
              key={item.id}
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
