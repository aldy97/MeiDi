import React, { useState } from 'react';
import Content from './Content';
import { connect } from 'react-redux';
import { NavigationWrapper, NavSection, NavItem } from '../styled';

function Navigation(props) {
  const [index, setIndex] = useState(0);

  return (
    <NavigationWrapper>
      <NavSection>
        {props.navigation.map((item) => {
          return (
            <NavItem
              className='navitem'
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
