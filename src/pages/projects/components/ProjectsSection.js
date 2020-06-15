import React from 'react';
import SingleProject from '../../home/components/SingleProject';
import { connect } from 'react-redux';
import { ProjectsSectionWrapper } from '../style';

//精品项目页面项目列表
function ProjectsSection(props) {
  return (
    <ProjectsSectionWrapper height={props.isSelected ? 1040 : 700}>
      {(props.isSelected ? props.SfqList : props.JfqList).map((item) => {
        return (
          <SingleProject
            imgURL={item.imgURL}
            title={item.title}
            desc={item.desc}
          />
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
