import { useState, useEffect } from 'react';

const useSlideDown = (text, duration = 300) => {
    const [displayText, setDisplayText] = useState(text);
    const [isSliding, setIsSliding] = useState(false);

    useEffect(() => {
        if (displayText !== text) {
            setIsSliding(true);
            const slideTimeout = setTimeout(() => {
                setDisplayText(text);
                setIsSliding(false);
            }, duration);

            return () => clearTimeout(slideTimeout);
        }
    }, [text, displayText, duration]);

    return { displayText, isSliding };
};

export default useSlideDown;
