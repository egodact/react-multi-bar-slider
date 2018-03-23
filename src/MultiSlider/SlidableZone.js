import PropTypes from 'prop-types';
import glamorous from 'glamorous';

const SlidableZone = glamorous.div({
  position: 'absolute',
  width: '100%'
}, ({ size, zIndex }) => ({
  top: -size,
  bottom: -size,
  zIndex
}));

SlidableZone.propTypes = {
  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  zIndex: PropTypes.number.isRequired
};

export default SlidableZone;
