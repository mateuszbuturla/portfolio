import React, { useEffect, useRef } from 'react';
import { TimelineMax } from 'gsap';
import ScrollMagic from 'scrollmagic';
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

function Project({ trigger }) {
  const refThumbnail = useRef(null);

  useEffect(() => {
    var controller = new ScrollMagic.Controller();

    const timeLine = new TimelineMax();

    new ScrollMagic.Scene({
      triggerElement: trigger.current,
      triggerHook: 'onLeave',
      duration: '100%',
    })
      .setTween(timeLine)
      .addIndicators()
      .addTo(controller);
  }, []);

  return (
    <StyledProjectContainer>
      <StyledProjectImage src={thumbnail} ref={refThumbnail} />
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
}

export default Project;
