import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import { connect } from 'react-redux';
import { ContentWrapper, PartnerLogoWrapper } from '../style';

function Content(props) {
  return (
    <ContentWrapper>
      <div className='title'>{props.navigation[props.index].title}</div>
      <div className='content'>
        {props.navigation[props.index].content.map((item) => {
          return <p>&nbsp;&nbsp;&nbsp;&nbsp;{item}</p>;
        })}
        <Carousel
          stopAutoPlayOnHover
          slidesPerPage={3}
          infinite
          arrows={props.index === 2 || props.index === 3 ? true : false}
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
