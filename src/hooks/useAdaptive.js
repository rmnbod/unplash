import { useState, useEffect } from 'react';

let isMobileInitial = checkIsMobile();

export default () => {

    const [isMobile, setMobile] = useState(checkIsMobile());

    const isMobilePrevious = isMobileInitial;
    isMobileInitial = isMobile;

    const onResizeHandler = () => isMobilePrevious === isMobile && setMobile(checkIsMobile());

    useEffect(() => {
        console.log("add event")
        window.addEventListener("resize", onResizeHandler);
        setMobile(checkIsMobile());
        return () => { window.removeEventListener("resize", onResizeHandler) }
    }, []);

    return isMobile;
};

function checkIsMobile() {
    return window.screen.width < 768;
}
