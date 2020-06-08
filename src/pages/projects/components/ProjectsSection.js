import React from 'react';
import SingleProject from '../../home/components/SingleProject';
import { connect } from 'react-redux';
import { ProjectsSectionWrapper } from '../style';

function ProjectsSection(props) {
  return (
    <ProjectsSectionWrapper>
      {(props.isSelected ? props.SfqList : props.JfqList).map((item) => {
        return (
          <SingleProject
            imgURL={item.imgURL}
            title={item.title}
            desc={item.desc}
          ></SingleProject>
        );
      })}
    </ProjectsSectionWrapper>
  );
}

const mapStateTo = (state) => {
  return {
    SfqList: state.getIn(['projects', 'SfqList']),
    JfqList: state.getIn(['projects', 'JfqList']),
  };
};

export default connect(mapStateTo)(ProjectsSection);
