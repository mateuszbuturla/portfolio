import React from 'react';
import {
  StyledIntroSectionContent,
  StyledName,
  StyledSurname,
  StyledProfession,
  StyledParagraph,
  StyledGetInTouch,
} from './StyledIntroSectionContent';

function IntroSectionContent() {
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

      <StyledGetInTouch>get in touch</StyledGetInTouch>
    </StyledIntroSectionContent>
  );
}

export default IntroSectionContent;
