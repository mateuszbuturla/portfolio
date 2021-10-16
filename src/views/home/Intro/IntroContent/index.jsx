import React from 'react';
import {
  StyledIntroSectionContent,
  StyledName,
  StyledSurname,
  StyledProfession,
  StyledParagraph,
  StyledGetInTouch,
  StyledIcon,
} from './StyledIntroSectionContent';
import clickIcon from '../../../../assets/tapIcon.svg';

export const IntroContent = () => {
  return (
    <StyledIntroSectionContent>
      <StyledName>
        Mateusz
        <br />
        <StyledSurname>Buturla</StyledSurname>
      </StyledName>
      <StyledProfession>Front-End Develop</StyledProfession>
      <StyledParagraph>
        Lorem Ipsum is simply dummy text of the printing
      </StyledParagraph>

      <StyledGetInTouch>
        <a href="mailto:2002mateuszbuturla@gmail.com">
          <StyledIcon src={clickIcon} />
          Get in touch
        </a>
      </StyledGetInTouch>
    </StyledIntroSectionContent>
  );
};
