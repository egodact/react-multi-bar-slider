import React from 'react';
import PropTypes from 'prop-types';
import processStyle from '../utils/processStyle';
import StyledDot from './StyledDot';
import DotIcon from './DotIcon';

const Dot = ({
  width,
  height,
  color,
  icon,
  style,
  iconStyle,
  progressColor,
  reversed,
  mouseDown,
  children,
  ...props
}) => (
  <StyledDot
    className="dot"
    hasIcon={!!icon}
    width={width}
    height={height}
    color={color || progressColor}
    reversed={reversed}
    noTransition={mouseDown}
    css={processStyle(style, {
      width,
      height,
      color,
      icon,
      progressColor,
      reversed,
      mouseDown
    })}
    {...props}
  >
    {icon && (
      <DotIcon
        className="icon"
        src={icon}
        width={width}
        height={height}
        draggable={false}
        css={processStyle(iconStyle, {
          width,
          height,
          color,
          icon,
          progressColor,
          mouseDown
        })}
      />
    )}
    {children}
  </StyledDot>
);

Dot.displayName = 'Dot';

Dot.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
  icon: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  iconStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  progressColor: PropTypes.string,
  reversed: PropTypes.bool,
  mouseDown: PropTypes.bool,
  children: PropTypes.node
};

export default Dot;
