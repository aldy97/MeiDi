import React from 'react';
import { ProjectWrapper, ImgSection, InfoSection } from '../style';

//首页精品项目单个轮播item
export default function SingleProject(props) {
  return (
    <ProjectWrapper className='project'>
      <ImgSection>
        <img className='project-img' alt='' src={props.imgURL} />
      </ImgSection>
      <InfoSection className='infosection'>
        <div className='title'>{props.title}</div>
        <div className='desc'>{props.desc}</div>
      </InfoSection>
    </ProjectWrapper>
  );
}
