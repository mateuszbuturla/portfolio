import React from 'react';
import { StyledAboutMe } from './StyledAboutMe';
import { Paragraph } from '../../common';

function AboutMe() {
  return (
    <StyledAboutMe>
      <Paragraph color="fontFirst">Lorem Ipsum is simply</Paragraph>
      <Paragraph color="fontFirst">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Paragraph>
      <Paragraph color="fontFirst">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. rwe qeqeqweqwrwerwerwer
      </Paragraph>
      <Paragraph color="fontFirst">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Paragraph>
    </StyledAboutMe>
  );
}

export default AboutMe;
