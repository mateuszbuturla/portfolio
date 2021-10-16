import React, { useEffect, useRef } from 'react';
import { TweenMax, TimelineMax } from 'gsap';
import ScrollMagic from 'scrollmagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';
import { Project } from '../../../components/Common';
import {
  StyledPinContainer,
  StyledSlideContainer,
  StyledSlide,
} from './StyledPortfolio';

export const Portfolio = () => {
  const refPinContainer = useRef(null);
  const refSliderContainer = useRef(null);

  useEffect(() => {
    const controller = new ScrollMagic.Controller();

    const wipeAnimation = new TimelineMax()
      // .panel.item-2
      .to(refSliderContainer.current, 0.5, { z: -150 })
      .to(refSliderContainer.current, 1, { x: '-25%' })
      .to(refSliderContainer.current, 0.5, { z: 0 })
      // .panel.item-3
      .to(refSliderContainer.current, 0.5, { z: -150, delay: 1 })
      .to(refSliderContainer.current, 1, { x: '-50%' })
      .to(refSliderContainer.current, 0.5, { z: 0 })
      // .panel.item-4
      .to(refSliderContainer.current, 0.5, { z: -150, delay: 1 })
      .to(refSliderContainer.current, 1, { x: '-75%' })
      .to(refSliderContainer.current, 0.5, { z: 0 });

    new ScrollMagic.Scene({
      triggerElement: refPinContainer.current,
      triggerHook: 'onLeave',
      duration: '500%',
    })
      .setPin(refPinContainer.current)
      .setTween(wipeAnimation)
      .addIndicators()
      .addTo(controller);

    controller.scrollTo((newpos, options) => {
      TweenMax.to(
        window,
        options.duration,
        { scrollTo: { y: newpos }, ease: options.ease },
        '-=.5',
      );
    });
  });

  return (
    <StyledPinContainer ref={refPinContainer}>
      <StyledSlideContainer ref={refSliderContainer}>
        <StyledSlide>
          <Project />
        </StyledSlide>
        <StyledSlide>
          <Project />
        </StyledSlide>
        <StyledSlide>
          <Project />
        </StyledSlide>
        <StyledSlide>
          <Project />
        </StyledSlide>
      </StyledSlideContainer>
    </StyledPinContainer>
  );
};

export default Portfolio;
