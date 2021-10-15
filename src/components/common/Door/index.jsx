import React, { useEffect, useRef } from 'react';
import { TimelineMax } from 'gsap';
import ScrollMagic from 'scrollmagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';
import { StyledDoor } from './StyledDoor';
import doorImg from '../../../assets/door.png';

export const Door = ({ direction = 'left', rootRef, from, to, hide }) => {
  const ref = useRef(null);

  useEffect(() => {
    const controller = new ScrollMagic.Controller();

    var timeLine = new TimelineMax();

    if (direction === 'right') {
      timeLine.to(ref.current, 1, { right: to });
    } else {
      timeLine.to(ref.current, 1, { left: to });
    }

    if (hide) {
      timeLine.fromTo(ref.current, 0.33, { opacity: 1 }, { opacity: 0 });
    }

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
    <StyledDoor src={doorImg} ref={ref} direction={direction} from={from} />
  );
};
