import React, { useEffect, useRef } from 'react';
import { TweenMax } from 'gsap';
import ScrollMagic from 'scrollmagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';
import avatarImage from '../../../assets/image.jpg';
import { StyledAvatar } from './StyledAvatar';

function Avatar({ introRef }) {
  const refAvatar = useRef(null);

  useEffect(() => {
    const controller = new ScrollMagic.Controller();

    const tweenAvatar = TweenMax.fromTo(
      refAvatar.current,
      1,
      { transform: 'translate(-50%, -50%) scale(0)', opacity: 0 },
      { transform: 'translate(-50%, -50%) scale(1)', opacity: 1 },
    );

    new ScrollMagic.Scene({
      triggerElement: introRef.current,
      triggerHook: 0,
      duration: '100%',
    })
      .setTween(tweenAvatar)
      .addIndicators()
      .addTo(controller);
  }, []);

  return <StyledAvatar src={avatarImage} ref={refAvatar} />;
}

export default Avatar;
