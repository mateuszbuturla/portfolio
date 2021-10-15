import React, { useRef, useEffect } from 'react';
import { TimelineMax } from 'gsap';
import ScrollMagic from 'scrollmagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';
import {
  StyledIntroBGContainer,
  StyledIntroBGPortait,
  StyledIntroBGLandscape,
} from './StyledIntroBG.js';
import mobileIntroBG from '../../../assets/mobileIntroBG.png';
import desktopIntroBG from '../../../assets/desktopIntroBG.png';

export const IntroBG = ({ rootRef, reverse }) => {
  const refBG = useRef(null);

  useEffect(() => {
    const controller = new ScrollMagic.Controller();

    var timeLine = new TimelineMax();

    timeLine.fromTo(
      refBG.current,
      0.33,
      { opacity: reverse ? 0 : 1 },
      { opacity: reverse ? 1 : 0 },
    );

    new ScrollMagic.Scene({
      triggerElement: rootRef.current,
      triggerHook: 0,
      duration: '110%',
    })
      .setTween(timeLine)
      .addIndicators()
      .addTo(controller);
  }, []);

  return (
    <StyledIntroBGContainer ref={refBG}>
      <StyledIntroBGPortait src={mobileIntroBG} />
      <StyledIntroBGLandscape src={desktopIntroBG} />
    </StyledIntroBGContainer>
  );
};
