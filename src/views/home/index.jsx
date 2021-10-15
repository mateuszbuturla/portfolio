import React, { useEffect, useRef } from 'react';
import ScrollMagic from 'scrollmagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';
import {} from '../../components/Common';
import {} from '../../components/Layout';
import { Intro } from './Intro';

function Home() {
  useEffect(() => {}, []);

  return (
    <>
      <Intro />
    </>
  );
}

export default Home;
