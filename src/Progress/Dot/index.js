import React from 'react';
import PropTypes from 'prop-types';
import processStyle from '../../utils/processStyle';
import StyledDot from './StyledDot';
import DotIcon from './DotIcon';

const Dot = ({ dot, sliderColor, reversed, mouseDown }) => (
  <StyledDot
    className="dot"
    hasIcon={!!dot.icon}
    width={dot.width}
    height={dot.height}
    color={dot.color || sliderColor}
    reversed={reversed}
    noTransition={mouseDown}
    css={processStyle(dot.style, { dot, sliderColor, reversed, mouseDown })}
  >
    {dot.icon && (
      <DotIcon
        className="icon"
        src={dot.icon}
        width={dot.width }
        height={dot.height}
        draggable={false}
        css={processStyle(dot.iconStyle, { dot, sliderColor, mouseDown })}
      />
    )}
  </StyledDot>
);

Dot.propTypes = {
  dot: PropTypes.oneOfType([
    PropTypes.shape({
      width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      color: PropTypes.string,
      icon: PropTypes.string,
      style: PropTypes.object
    }),
    PropTypes.bool
  ]).isRequired,
  sliderColor: PropTypes.string.isRequired,
  reversed: PropTypes.bool.isRequired,
  mouseDown: PropTypes.bool.isRequired
};

export default Dot;
