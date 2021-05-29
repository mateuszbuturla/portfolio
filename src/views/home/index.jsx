import React, { useEffect, useRef } from 'react';
import ScrollMagic from 'scrollmagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';
import { Door, Avatar } from '../../components/common';
import {
  IntroSection,
  IntroSectionContent,
  AboutMe,
} from '../../components/layout';

function Home() {
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
      <IntroSection ref={introRef}>
        <Door from="43.1vw" to="30vw" direction="left" introRef={introRef} />
        <Door from="43.1vw" to="30vw" direction="right" introRef={introRef} />
        <Avatar introRef={introRef} />
      </IntroSection>
      <IntroSectionContent />
      <AboutMe />
      <div style={{ height: '200vh' }}></div>
    </>
  );
}

export default Home;
