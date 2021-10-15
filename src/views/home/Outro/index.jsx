import React, { useEffect, useRef } from 'react';
import ScrollMagic from 'scrollmagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import { IntroBG, Door } from '../../../components/Common';
import { IntroContainer } from '../../../components/Layout';

export const Outro = () => {
  const outroRef = useRef(null);

  useEffect(() => {
    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
      triggerElement: outroRef.current,
      triggerHook: 0,
      duration: '100%',
    })
      .setPin(outroRef.current)
      .addIndicators()
      .addTo(controller);
  }, []);

  return (
    <IntroContainer ref={outroRef}>
      <IntroBG rootRef={outroRef} reverse />
      <Door direction="left" rootRef={outroRef} from="68vw" to="50vw" />
      <Door direction="right" rootRef={outroRef} from="68vw" to="50vw" />
    </IntroContainer>
  );
};
