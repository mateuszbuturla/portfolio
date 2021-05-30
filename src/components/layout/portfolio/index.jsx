import React, { useEffect, useRef } from 'react';
import { TimelineMax } from 'gsap';
import ScrollMagic from 'scrollmagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';
import { Project } from '../../common';
import {
  StyledPorfolioContainer,
  StyledProjectContainer,
} from './StyledPortfolio';

function Portfolio() {
  const refContainer = useRef(null);
  const refProject1 = useRef(null);
  const refProject2 = useRef(null);
  const refProject3 = useRef(null);
  const refProject4 = useRef(null);

  useEffect(() => {
    var controller = new ScrollMagic.Controller();

    var horizontalSlide = new TimelineMax()
      // animate panels
      .to(refProject1.current, 1, { left: '-100%' })
      .to(refProject2.current, 1, { left: '-100%' })
      .to(refProject3.current, 1, { left: '-100%' })
      .to(refProject4.current, 1, { left: '-100%' });

    // create scene to pin and link animation
    new ScrollMagic.Scene({
      triggerElement: refContainer.current,
      triggerHook: 'onLeave',
      duration: '400%',
    })
      .setPin(refContainer.current)
      .setTween(horizontalSlide)
      //.addIndicators() // add indicators (requires plugin)
      .addTo(controller);
  }, []);

  return (
    <StyledPorfolioContainer ref={refContainer}>
      <StyledProjectContainer ref={refProject1} first>
        <Project />
      </StyledProjectContainer>
      <StyledProjectContainer ref={refProject2}>
        <Project />
      </StyledProjectContainer>
      <StyledProjectContainer ref={refProject3}>
        <Project />
      </StyledProjectContainer>
      <StyledProjectContainer ref={refProject4}>
        <Project />
      </StyledProjectContainer>
    </StyledPorfolioContainer>
  );
}

export default Portfolio;
