import React, { useEffect, useRef } from 'react';
import ScrollMagic from 'scrollmagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import { IntroBG, Door, Avatar } from '../../../components/Common';
import { IntroContainer } from '../../../components/Layout';
import { IntroContent } from './IntroContent';

export const Intro = () => {
  const introRef = useRef(null);

  useEffect(() => {
    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
      triggerElement: introRef.current,
      triggerHook: 0,
      duration: '100%',
    })
      .setPin(introRef.current)
      .addIndicators()
      .addTo(controller);
  }, []);

  return (
    <>
      <IntroContainer ref={introRef}>
        <IntroBG rootRef={introRef} />
        <Door direction="left" rootRef={introRef} from="50vw" to="68vw" hide />
        <Door direction="right" rootRef={introRef} from="50vw" to="68vw" hide />
        <Avatar rootRef={introRef} />
      </IntroContainer>
      <IntroContent />
    </>
  );
};
