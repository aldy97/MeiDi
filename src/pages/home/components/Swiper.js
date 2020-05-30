import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import { connect } from 'react-redux';
import '@brainhubeu/react-carousel/lib/style.css';

function Swiper(props) {
  return (
    <Carousel>
      {/* {props.swiperImgList.map((item) => {
        return <img alt='' src={item.imgURL} />;
      })} */}
    </Carousel>
  );
}

const mapStateToProps = (state) => {
  return {
    swiperImgList: state.getIn(['home', 'swiperImgList']),
  };
};

export default connect(mapStateToProps, null)(Swiper);
