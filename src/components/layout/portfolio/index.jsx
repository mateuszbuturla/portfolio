import React, { useEffect, useRef } from 'react';
import { TweenMax, TimelineMax } from 'gsap';
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

    const tt = new TimelineMax();
    tt.to(refProject1.current, 1, { left: '-100vw' });
    tt.to(refProject2.current, 1, { left: '-100vw' });
    tt.to(refProject3.current, 1, { left: '-100vw' });
    tt.to(refProject4.current, 1, { left: '-100vw' });

    // const t1 = TweenMax.to(refProject1.current, 1, { left: '-100%' });
    // const t2 = TweenMax.to(refProject2.current, 1, { left: '-100%', delay: 1 });
    // const t3 = TweenMax.to(refProject3.current, 1, { left: '-100%', delay: 2 });
    // const t4 = TweenMax.to(refProject4.current, 1, { left: '-100%', delay: 3 });

    new ScrollMagic.Scene({
      triggerElement: refContainer.current,
      triggerHook: 'onLeave',
      duration: '800%',
    })
      .setPin(refContainer.current)
      .setTween(tt)
      .addIndicators()
      .addTo(controller);
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      <StyledPorfolioWrapper>
        <StyledPorfolioContainer ref={refContainer}>
          <StyledProjectContainer ref={refProject1} left={1}>
            <Project trigger={refProject1Trigger} />
          </StyledProjectContainer>
          <StyledProjectContainer ref={refProject2} left={2}>
            <Project trigger={refProject2Trigger} />
          </StyledProjectContainer>
          <StyledProjectContainer ref={refProject3} left={3}>
            <Project trigger={refProject3Trigger} />
          </StyledProjectContainer>
          <StyledProjectContainer ref={refProject4} left={4}>
            <Project trigger={refProject4Trigger} />
          </StyledProjectContainer>
        </StyledPorfolioContainer>
      </StyledPorfolioWrapper>
      <div style={{ position: 'absolute', top: '100vh' }}>
        <div
          style={{
            height: '100vh',
            width: '50vw',
            opacity: 0.3,
            // backgroundColor: 'pink',
          }}
          ref={refProject1Trigger}
        />
        <div
          style={{
            marginTop: '100vh',
            height: '100vh',
            width: '50vw',
            // backgroundColor: 'blue',
            opacity: 0.3,
            marginLeft: '200px',
          }}
          ref={refProject2Trigger}
        />
        <div
          style={{
            marginTop: '100vh',
            height: '100vh',
            width: '50vw',
            opacity: 0.3,
            // backgroundColor: 'pink',
          }}
          ref={refProject3Trigger}
        />
        <div
          style={{
            marginTop: '100vh',
            height: '100vh',
            width: '50vw',
            // backgroundColor: 'blue',
            opacity: 0.3,
            marginLeft: '200px',
          }}
          ref={refProject4Trigger}
        />
      </div>
    </div>
  );
}

export default Portfolio;
