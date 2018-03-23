import PropTypes from 'prop-types';
import glamorous from 'glamorous';

const DotIcon = glamorous.img({
  position: 'absolute',
  transform: 'translateX(-50%)',
  userDrag: 'none',
  userSelect: 'none'
}, ({ width, height }) => ({
  width,
  height
}));

DotIcon.displayName = 'DotIcon';

DotIcon.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  css: PropTypes.object
};

DotIcon.defaultProps = {
  width: 50,
  height: 50
};

export default DotIcon;
