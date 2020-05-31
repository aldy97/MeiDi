import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import { connect } from 'react-redux';
import { SlideWrapper } from '../style';
import { Animated } from 'react-animated-css';
import '../swiperStyle.css';

//首页最上方的走马灯
function Swiper(props) {
  return (
    <Carousel
      autoPlay={3000}
      animationSpeed={1500}
      infinite
      stopAutoPlayOnHover
    >
      {props.swiperImgList.map((item) => {
        return (
          <SlideWrapper>
            <Animated animationIn='fadeInRight' animationInDuration={1500}>
              <div className='title'>{item.title}</div>
              <div className='desc'>{item.desc}</div>
            </Animated>
            <img className='slideImg' alt='' src={item.imgURL} key={item.id} />
          </SlideWrapper>
        );
      })}
    </Carousel>
  );
}

const mapStateToProps = (state) => {
  return {
    swiperImgList: state.getIn(['home', 'swiperImgList']),
  };
};

export default connect(mapStateToProps, null)(Swiper);
