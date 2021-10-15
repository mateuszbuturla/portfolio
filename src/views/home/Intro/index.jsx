import React, { useRef } from 'react';
import { IntroBG, Door } from '../../../components/Common';
import { IntroContainer } from '../../../components/Layout';

export const Intro = () => {
  const introRef = useRef(null);

  return (
    <IntroContainer ref={introRef}>
      <IntroBG rootRef={introRef} />
      <Door direction="left" rootRef={introRef} from="50vw" to="68vw" hide />
      <Door direction="right" rootRef={introRef} from="50vw" to="68vw" hide />
    </IntroContainer>
  );
};
