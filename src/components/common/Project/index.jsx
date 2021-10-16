import React from 'react';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';
import {
  StyledProjectContainer,
  StyledProjectImage,
  StyledProjectName,
  StyledProjectCategory,
  StyledProjectNumber,
  StyledProjectTechnologies,
} from './StyledProject';

import thumbnail from '../../../assets/thumbnail.png';

export const Project = () => {
  return (
    <StyledProjectContainer>
      <StyledProjectImage src={thumbnail} />
      <StyledProjectName>Project name</StyledProjectName>
      <StyledProjectCategory>Category</StyledProjectCategory>
      <StyledProjectNumber>
        <p>1</p>
        <hr />
        <p>4</p>
      </StyledProjectNumber>
      <StyledProjectTechnologies>
        <p>React</p>
        <p>React</p>
        <p>React</p>
        <p>React</p>
      </StyledProjectTechnologies>
    </StyledProjectContainer>
  );
};
