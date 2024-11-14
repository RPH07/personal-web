/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import useTypewriter from './useTypewriter';

const Typewriter = ({ texts, typingSpeed, deletingSpeed, delay }) => {
    const displayText = useTypewriter(texts, typingSpeed, deletingSpeed, delay);

    return <p>Aku adalah seorang {displayText}</p>;
};

Typewriter.propTypes = {
    texts: PropTypes.arrayOf(PropTypes.string).isRequired,
    typingSpeed: PropTypes.number,
    deletingSpeed: PropTypes.number,
    delay: PropTypes.number,
};

Typewriter.defaultProps = {
    typingSpeed: 50,
    deletingSpeed: 30,
    delay: 3000,
};

export default Typewriter;
