/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import useSlideDown from './useSlideDown';
import './SlideDownText.css';

const SlideDownText = ({ text, duration }) => {
    const { displayText, isSliding } = useSlideDown(text, duration);

    return (
        <div className={`slide-down-container ${isSliding ? 'sliding' : ''}`}>
            {displayText}
        </div>
    );
};

SlideDownText.propTypes = {
    text: PropTypes.string.isRequired,
    duration: PropTypes.number,
};

SlideDownText.defaultProps = {
    duration: 300,
};

export default SlideDownText;
