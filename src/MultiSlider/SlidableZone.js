import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const SlidableZone = styled('div')({
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
