import { useState, useEffect } from 'react';

let isMobilePrevious = checkIsMobile()

export default () => {

    const [isMobile, setMobile] = useState(checkIsMobile());

    const onResizeHandler = () => {
        console.log(isMobile + " " + isMobilePrevious)
        if (isMobilePrevious !== checkIsMobile()) {
            setMobile(checkIsMobile()); console.log("setMobile")
            isMobilePrevious = checkIsMobile();
        }
    }

    useEffect(() => {
        console.log("add event")
        window.addEventListener("resize", onResizeHandler);
        setMobile(checkIsMobile());
        return () => { window.removeEventListener("resize", onResizeHandler) }
    }, []);

    return isMobile;
};

function checkIsMobile() {
    return window.innerWidth < 768;
}
