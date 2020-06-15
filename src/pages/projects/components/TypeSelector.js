import React from 'react';
import { TypeSelectorWrapper, TypeSelectorItem } from '../style';

//项目类型选择：示范区或者交付区
export default function TypeSelector(props) {
  return (
    <TypeSelectorWrapper>
      <TypeSelectorItem
        onClick={props.handleClick1}
        className={props.isSelected ? 'selected' : 'notSelected'}
      >
        <div className='Sfq'>示范区</div>
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
