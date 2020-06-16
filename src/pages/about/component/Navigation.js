import React, { useState } from 'react';
import Content from './Content';
import { connect } from 'react-redux';
import { NavigationWrapper, NavSection, NavItem } from '../style';

//关于美地分页内容板块+内容
function Navigation(props) {
  const [index, setIndex] = useState(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('value');
    return myParam;
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
