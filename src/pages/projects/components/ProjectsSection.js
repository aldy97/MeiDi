import React from 'react';
import { connect } from 'react-redux';
import { ProjectsSectionWrapper } from '../style';

function ProjectsSection(props) {
  return <ProjectsSectionWrapper></ProjectsSectionWrapper>;
}

const mapStateTo = (state) => {
  return;
};

export default connect(mapStateTo)(ProjectsSection);
