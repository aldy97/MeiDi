import React from 'react';
import { TypeSelectorWrapper, TypeSelectorItem } from '../style';

//项目类型选择：示范区或者交付区
function TypeSelector(props) {
  return (
    <TypeSelectorWrapper>
      <TypeSelectorItem
        onClick={props.handleClick1}
        className={props.isSelected ? 'selected' : 'notSelected'}
      >
        示范区
      </TypeSelectorItem>
      <TypeSelectorItem
        onClick={props.handleClick2}
        className={props.isSelected ? 'notSelected' : 'selected'}
      >
        交付区
      </TypeSelectorItem>
    </TypeSelectorWrapper>
  );
}

export default TypeSelector;
