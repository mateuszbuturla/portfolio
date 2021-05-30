import React from 'react';
import { StyledProjectContainer, StyledProjectImage } from './StyledProject';

import thumbnail from '../../../assets/thumbnail.png';

function Project() {
  return (
    <StyledProjectContainer>
      <StyledProjectImage src={thumbnail} />
    </StyledProjectContainer>
  );
}

export default Project;
