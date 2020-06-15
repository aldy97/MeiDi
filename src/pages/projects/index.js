import React, { useState, useEffect } from 'react';
import TypeSelector from './components/TypeSelector';
import ProjectsSection from './components/ProjectsSection';
import { connect } from 'react-redux';
import { TitleWrapper, BannerWrapper } from './style';

//分页面入口文件：精品项目，包含示范区以及交付区两大项
function Projects(props) {
  const [isSelected, setSelected] = useState(true);

  useEffect(() => {
    document.title = '精品项目';
  });

  const handleClick1 = () => {
    if (!isSelected) {
      setSelected(!isSelected);
    }
  };

  const handleClick2 = () => {
    if (isSelected) {
      setSelected(!isSelected);
    }
  };

  return (
    <div>
      <BannerWrapper>
        <img className='bannerimg' src={props.bannerImgSrc} alt='' />
      </BannerWrapper>
      <TitleWrapper>
        <div className='title'>精品项目</div>
      </TitleWrapper>
      <TypeSelector
        isSelected={isSelected}
        handleClick1={handleClick1}
        handleClick2={handleClick2}
      />
      <ProjectsSection isSelected={isSelected}></ProjectsSection>
    </div>
  );
}

const mapState = (state) => {
  return {
    bannerImgSrc: state.getIn(['projects', 'bannerImgSrc']),
  };
};

export default connect(mapState, null)(Projects);
