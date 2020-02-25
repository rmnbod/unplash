import React, { useState, useEffect } from 'react';
import MobileHeader from './mobileHeader';
import DesktopHeader from './desktopHeader';

export default () => {

  const [isMobile, setMobile] = useState(checkIsMobile());

  const onResizeHandler = () => setMobile(checkIsMobile());

  useEffect(() => {
    window.addEventListener("resize", onResizeHandler);
    setMobile(checkIsMobile());
    return () => { window.removeEventListener("resize", onResizeHandler); }
  }, []);

  return isMobile ? <MobileHeader /> : <DesktopHeader />;
};

function checkIsMobile() { return window.screen.width < 768; }
