import React, { Component } from 'react';
import {
  FieldWrapper,
  NavigationWrapper,
  NavItemWrapper,
  NavItem,
  TextWrapper,
} from './style';
import { BannerImgWrapper } from '../about/style';
import { connect } from 'react-redux';
//分页面：业务领域
class Field extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  componentDidMount() {
    document.title = '业务领域';
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('value');
    this.setState(() => {
      return { index: myParam };
    });
  }

  render() {
    return (
      <FieldWrapper>
        <BannerImgWrapper>
          <img className='bannerImg' src={this.props.fieldBannerImg} alt='' />
        </BannerImgWrapper>
        <NavigationWrapper>
          <NavItemWrapper>
            {this.props.navItemList[2].dropDown.map((item, i) => {
              return (
                <NavItem
                  className='navitem'
                  key={i}
                  onClick={() => {
                    this.setState(() => {
                      return { index: i };
                    });
                  }}
                >
                  {item}
                </NavItem>
              );
            })}
          </NavItemWrapper>
        </NavigationWrapper>
        <TextWrapper>
          <div className='title'>
            {this.props.navItemList[2].dropDown[this.state.index]}
          </div>
          <div className='spec'>
            &nbsp;&nbsp;&nbsp;&nbsp;
            {this.props.aboutInfoList[this.state.index].spec}
          </div>
        </TextWrapper>
      </FieldWrapper>
    );
  }
}

const mapState = (state) => {
  return {
    fieldBannerImg: state.getIn(['field', 'fieldBannerImg']),
    navItemList: state.getIn(['header', 'navItemList']),
    aboutInfoList: state.getIn(['home', 'aboutInfoList']),
  };
};

export default connect(mapState, null)(Field);
