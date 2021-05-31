import React, { useEffect, useRef } from 'react';
import { TweenMax, TimelineMax } from 'gsap';
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
  const refProjectName = useRef(null);
  const refProjectCategory = useRef(null);
  const refProjectNumber = useRef(null);
  const refProjectTechnologies = useRef(null);

  useEffect(() => {
    var controller = new ScrollMagic.Controller();

    const tt = TweenMax.to(
      [
        refProjectNumber.current,
        refProjectCategory.current,
        refProjectName.current,
        refProjectTechnologies.current,
      ],
      1,
      {
        opacity: 1,
        delay: 0.5,
      },
    );
    new ScrollMagic.Scene({
      triggerElement: trigger.current,
      triggerHook: 0,
      duration: '100%',
    })
      .setTween(tt)
      .addIndicators()
      .addTo(controller);
  }, []);

  return (
    <StyledProjectContainer>
      <StyledProjectImage src={thumbnail} ref={refThumbnail} />
      <StyledProjectName ref={refProjectName}>Project name</StyledProjectName>
      <StyledProjectCategory ref={refProjectCategory}>
        Category
      </StyledProjectCategory>
      <StyledProjectNumber ref={refProjectNumber}>
        <p>1</p>
        <hr />
        <p>4</p>
      </StyledProjectNumber>
      <StyledProjectTechnologies ref={refProjectTechnologies}>
        <p>React</p>
        <p>React</p>
        <p>React</p>
        <p>React</p>
      </StyledProjectTechnologies>
    </StyledProjectContainer>
  );
}

export default Project;
