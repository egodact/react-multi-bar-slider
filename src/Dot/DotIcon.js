import PropTypes from 'prop-types';
import styled from 'react-emotion';

const DotIcon = styled('img')({
  position: 'absolute',
  transform: 'translateX(-50%)',
  userDrag: 'none',
  userSelect: 'none'
}, ({ width, height, css }) => ({
  width,
  height,
  ...css
}));

DotIcon.displayName = 'DotIcon';

DotIcon.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  css: PropTypes.object
};

DotIcon.defaultProps = {
  width: 50,
  height: 50,
  css: null
};

export default DotIcon;
