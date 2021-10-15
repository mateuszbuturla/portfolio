import React, { useEffect, useRef } from 'react';
import ScrollMagic from 'scrollmagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';
import {} from '../../components/Common';
import {} from '../../components/Layout';
import { Intro } from './Intro';
import { AboutMe } from './AboutMe';
import { Outro } from './Outro';

export const Home = () => {
  useEffect(() => {}, []);

  return (
    <>
      <Intro />
      <AboutMe />
      <Outro />
    </>
  );
};
