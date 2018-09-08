import PropTypes from 'prop-types';
import styled from 'react-emotion';
import transition from '../utils/transition';
import getHalf from '../utils/getHalf';

const StyledSlider = styled('div')({
  position: 'relative',
  height: 14,
  boxSizing: 'border-box',
  transition
}, ({ width, height, backgroundColor, roundedCorners, readOnly, css }) => ({
  width,
  height,
  backgroundColor,
  borderRadius: roundedCorners ? getHalf(height) : 0,
  cursor: readOnly ? 'auto' : 'pointer',
  ...css
}));


StyledSlider.propTypes = {
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  backgroundColor: PropTypes.string.isRequired,
  roundedCorners: PropTypes.bool.isRequired,
  readOnly: PropTypes.bool.isRequired,
  css: PropTypes.object.isRequired
};

StyledSlider.defaultProps = {
  css: null
};

export default StyledSlider;
