import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import { connect } from 'react-redux';
import { SlideWrapper } from '../style';
import '@brainhubeu/react-carousel/lib/style.css';

// 首页最上方的走马灯
function Swiper(props) {
  return (
    <Carousel
      autoPlay={5000}
      animationSpeed={1000}
      infinite
      stopAutoPlayOnHover
    >
      {props.swiperImgList.map((item) => {
        return (
          <SlideWrapper>
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
