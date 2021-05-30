import React, { useEffect, useRef } from 'react';
import { TimelineMax } from 'gsap';
import ScrollMagic from 'scrollmagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';
import { Project } from '../../common';
import {
  StyledPorfolioWrapper,
  StyledPorfolioContainer,
  StyledProjectContainer,
} from './StyledPortfolio';

function Portfolio() {
  const refContainer = useRef(null);
  const refProject1 = useRef(null);
  const refProject2 = useRef(null);
  const refProject3 = useRef(null);
  const refProject4 = useRef(null);
  const refProject1Trigger = useRef(null);
  const refProject2Trigger = useRef(null);
  const refProject3Trigger = useRef(null);
  const refProject4Trigger = useRef(null);

  useEffect(() => {
    const controller = new ScrollMagic.Controller();

    const horizontalSlide = new TimelineMax()
      .to(refProject1.current, 1, { left: '-100%' })
      .to(refProject2.current, 1, { left: '-100%' })
      .to(refProject3.current, 1, { left: '-100%' })
      .to(refProject4.current, 1, { left: '-100%' });

    new ScrollMagic.Scene({
      triggerElement: refContainer.current,
      triggerHook: 'onLeave',
      duration: '800%',
    })
      .setPin(refContainer.current)
      .setTween(horizontalSlide)
      .addIndicators()
      .addTo(controller);
  }, []);

  return (
    <StyledPorfolioWrapper>
      <StyledPorfolioContainer ref={refContainer}>
        <StyledProjectContainer ref={refProject1} first>
          <Project trigger={refProject1Trigger} />
        </StyledProjectContainer>
        <StyledProjectContainer ref={refProject2}>
          <Project trigger={refProject2Trigger} />
        </StyledProjectContainer>
        <StyledProjectContainer ref={refProject3}>
          <Project trigger={refProject3Trigger} />
        </StyledProjectContainer>
        <StyledProjectContainer ref={refProject4}>
          <Project trigger={refProject4Trigger} />
        </StyledProjectContainer>
      </StyledPorfolioContainer>
      <div
        style={{ position: 'absolute', top: '0', height: '100vh' }}
        ref={refProject1Trigger}
      />
      <div
        style={{ position: 'absolute', top: '100vh', height: '100vh' }}
        ref={refProject2Trigger}
      />
      <div
        style={{ position: 'absolute', top: '200vh', height: '100vh' }}
        ref={refProject3Trigger}
      />
      <div
        style={{ position: 'absolute', top: '300vh', height: '100vh' }}
        ref={refProject4Trigger}
      />
    </StyledPorfolioWrapper>
  );
}

export default Portfolio;
