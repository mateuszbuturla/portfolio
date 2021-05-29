import React, { useEffect, useRef } from 'react';
import { TimelineMax } from 'gsap';
import ScrollMagic from 'scrollmagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';
import { StyledDoor } from './StyledDoor';
import doorImg from '../../../assets/door.png';

function Door({ from, to, direction = 'left', introRef }) {
  const ref = useRef(null);

  useEffect(() => {
    const controller = new ScrollMagic.Controller();

    var timeLine = new TimelineMax();

    timeLine.fromTo(
      ref.current,
      0.66,
      direction === 'right' ? { right: from } : { left: from },
      direction === 'right' ? { right: to } : { left: to },
    );
    timeLine.fromTo(ref.current, 0.33, { opacity: 1 }, { opacity: 0 });

    new ScrollMagic.Scene({
      triggerElement: introRef.current,
      triggerHook: 0,
      duration: '110%',
    })
      .setTween(timeLine)
      .addIndicators()
      .addTo(controller);
  }, []);

  return (
    <StyledDoor
      src={doorImg}
      ref={ref}
      direction={direction}
      startRight={direction === 'right' && from}
      startLeft={direction === 'left' && from}
    />
  );
}

export default Door;
