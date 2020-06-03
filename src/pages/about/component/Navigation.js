import React, { Component } from 'react';
import Content from './Content';
import { connect } from 'react-redux';
import { NavigationWrapper, NavSection, NavItem } from '../style';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  componentDidMount() {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('value');
    this.setState(() => {
      return { index: myParam };
    });
  }

  render() {
    return (
      <NavigationWrapper>
        <NavSection>
          {this.props.navigation.map((item) => {
            return (
              <NavItem
                className='navitem'
                key={item.id}
                onClick={() => {
                  this.setState(() => {
                    return { index: item.id };
                  });
                }}
              >
                {item.title}
              </NavItem>
            );
          })}
        </NavSection>
        <Content index={this.state.index}></Content>
      </NavigationWrapper>
    );
  }
}

const mapState = (state) => {
  return { navigation: state.getIn(['about', 'navigation']) };
};

export default connect(mapState, null)(Navigation);
