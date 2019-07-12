import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import transition from '../utils/transition';

const StyledDot = styled('span')({
  position: 'absolute',
  right: 0,
  display: 'block',
  zIndex: 5,
  borderRadius: '50%'
}, ({ hasIcon, width, height, color, reversed, noTransition, css }) => ({
  top: hasIcon ? 0 : '50%',
  left: reversed ? 0 : 'auto',
  right: reversed ? 'auto' : 0,
  transform: hasIcon
    ? 'translateX(-50%)'
    : reversed ? 'translate(-50%, -50%)' : 'translate(50%, -50%)',
  width: hasIcon ? 0 : width,
  height: hasIcon ? 0 : height,
  backgroundColor: hasIcon ? 'transparent' : color,
  transition: noTransition ? 'none' : transition,
  ...css
}));

StyledDot.propTypes = {
  hasIcon: PropTypes.bool.isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string.isRequired,
  reversed: PropTypes.bool.isRequired,
  noTransition: PropTypes.bool.isRequired,
  css: PropTypes.object
};

StyledDot.defaultProps = {
  width: 28,
  height: 28,
  css: null
};

export default StyledDot;
