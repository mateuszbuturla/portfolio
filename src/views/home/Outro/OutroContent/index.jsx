import React from 'react';
import {
  StyledName,
  StyledSurname,
  StyledFooter,
  StyledSocial,
  StyledSocialIcon,
} from './StyledIntroSectionContent';
import linkendinIcon from '../../../../assets/linkedinIcon.png';
import mailIcon from '../../../../assets/mailIcon.png';
import githubIcon from '../../../../assets/githubIcon.jpg';

export const OutroContent = () => {
  return (
    <>
      <StyledName>
        Mateusz
        <br />
        <StyledSurname>Buturla</StyledSurname>
      </StyledName>
      <StyledSocial>
        <a
          href="https://www.linkedin.com/in/mateusz-buturla-4b22a6192/"
          target="_blank"
        >
          <StyledSocialIcon src={linkendinIcon} />
        </a>
        <a href="mailto:2002mateuszbuturla@gmail.com">
          <StyledSocialIcon src={mailIcon} />
        </a>
        <a href="https://github.com/mateuszbuturla" target="_blank">
          <StyledSocialIcon src={githubIcon} />
        </a>
      </StyledSocial>
      <StyledFooter>Made with a lot of 💖 and shrimps</StyledFooter>
    </>
  );
};
