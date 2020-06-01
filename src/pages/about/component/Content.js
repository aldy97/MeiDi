import React from 'react';
import { connect } from 'react-redux';
import { ContentWrapper } from '../styled';

function Content(props) {
  return (
    <ContentWrapper>
      <div className=''>{props.navigation[props.index].desc}</div>
    </ContentWrapper>
  );
}

const mapState = (state) => {
  return { navigation: state.getIn(['about', 'navigation']) };
};

export default connect(mapState, null)(Content);
