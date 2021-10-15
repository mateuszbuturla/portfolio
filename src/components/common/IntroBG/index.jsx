import React from 'react';
import {
  StyledIntroBGContainer,
  StyledIntroBGPortait,
  StyledIntroBGLandscape,
} from './StyledIntroBG.js';
import mobileIntroBG from '../../../assets/mobileIntroBG.png';
import desktopIntroBG from '../../../assets/desktopIntroBG.png';

export const IntroBG = ({ rootRef }) => {
  return (
    <StyledIntroBGContainer>
      <StyledIntroBGPortait src={mobileIntroBG} />
      <StyledIntroBGLandscape src={desktopIntroBG} />
    </StyledIntroBGContainer>
  );
};
