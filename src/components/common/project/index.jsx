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

function Project({ trigger, color }) {
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
      },
    );
    new ScrollMagic.Scene({
      triggerElement: trigger.current,
      triggerHook: 0.8,
      duration: '100%',
    })
      .setTween(tt)
      .addIndicators({ colorStart: 'yellow', colorEnd: 'yellow' })
      .addTo(controller);

    const tt2 = TweenMax.to(
      [
        refProjectNumber.current,
        refProjectCategory.current,
        refProjectName.current,
        refProjectTechnologies.current,
      ],
      0.4,
      {
        opacity: 0,
      },
    );
    new ScrollMagic.Scene({
      triggerElement: trigger.current,
      triggerHook: 0.45,
      duration: '100%',
    })
      .setTween(tt2)
      .addIndicators({ colorStart: 'yellow', colorEnd: 'yellow' })
      .addTo(controller);

    // const tt2 = TweenMax.to(
    //   [
    //     refProjectNumber.current,
    //     refProjectCategory.current,
    //     refProjectName.current,
    //     refProjectTechnologies.current,
    //   ],
    //   1,
    //   {
    //     opacity: 0,
    //   },
    // );
    // new ScrollMagic.Scene({
    //   triggerElement: trigger.current,
    //   triggerHook: 0.8,
    //   duration: '100%',
    // })
    //   .setTween(tt2)
    //   .addIndicators()
    //   .addTo(controller);
  }, []);

  return (
    <StyledProjectContainer color={color}>
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
