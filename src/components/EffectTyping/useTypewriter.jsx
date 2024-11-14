import { useState, useEffect } from 'react';

const useTypewriter = (texts, typingSpeed = 50, deletingSpeed = 40, delay = 1000) => {
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        if (textIndex >= texts.length) {
            return;
        }

        let currentText = texts[textIndex];
        let typingInterval;

        if (isDeleting) {
            typingInterval = setInterval(() => {
                if (charIndex > 0) {
                    setDisplayText(prevText => prevText.slice(0, -1));
                    setCharIndex(prevCharIndex => prevCharIndex - 1);
                } else {
                    setIsDeleting(false);
                    setTextIndex(prevTextIndex => (prevTextIndex + 1) % texts.length);
                }
            }, deletingSpeed);
        } else {
            typingInterval = setInterval(() => {
                if (charIndex < currentText.length) {
                    setDisplayText(prevText => prevText + currentText.charAt(charIndex));
                    setCharIndex(prevCharIndex => prevCharIndex + 1);
                } else {
                    setIsTyping(false);
                    setTimeout(() => {
                        setIsDeleting(true);
                        setIsTyping(true);
                    }, delay);
                    clearInterval(typingInterval);
                }
            }, typingSpeed);
        }

        return () => clearInterval(typingInterval);
    }, [charIndex, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, delay]);

    return { displayText, isTyping };
};

export default useTypewriter;
