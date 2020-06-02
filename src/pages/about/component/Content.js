import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import { connect } from 'react-redux';
import { ContentWrapper, PartnerLogoWrapper } from '../styled';

function Content(props) {
  return (
    <ContentWrapper>
      <div className='title'>{props.navigation[props.index].title}</div>
      <div
        className='content'
        style={
          props.index === 1 || props.index === 2
            ? { 'text-align': 'center' }
            : null
        }
      >
        {props.navigation[props.index].content.map((item) => {
          return <p>&nbsp;&nbsp;&nbsp;&nbsp;{item}</p>;
        })}
        <Carousel
          stopAutoPlayOnHover
          slidesPerPage={3}
          arrows={props.index === 2 ? true : false}
          autoPlay={props.index === 3 ? 1000 : null}
          infinite
        >
          {props.navigation[props.index].imgUrlList.map((item) => {
            return (
              <PartnerLogoWrapper>
                <img alt='' className='partner-logo' src={item} />
              </PartnerLogoWrapper>
            );
          })}
        </Carousel>
      </div>
    </ContentWrapper>
  );
}

const mapState = (state) => {
  return { navigation: state.getIn(['about', 'navigation']) };
};

export default connect(mapState, null)(Content);
