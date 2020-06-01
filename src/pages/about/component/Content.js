import React from 'react';
import { connect } from 'react-redux';
import { ContentWrapper } from '../styled';

function Content(props) {
  return (
    <ContentWrapper>
      <div className='title'>{props.navigation[props.index].title}</div>
      <div className='content'>
        {props.navigation[props.index].content.map((item) => {
          return <p>&nbsp;&nbsp;&nbsp;&nbsp;{item}</p>;
        })}
      </div>
    </ContentWrapper>
  );
}

const mapState = (state) => {
  return { navigation: state.getIn(['about', 'navigation']) };
};

export default connect(mapState, null)(Content);
