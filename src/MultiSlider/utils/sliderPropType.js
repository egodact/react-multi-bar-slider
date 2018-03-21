import PropTypes from 'prop-types';

const sliderPropType = PropTypes.shape({
  color: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
  dot: PropTypes.oneOfType([
    PropTypes.shape({
      color: PropTypes.string,
      icon: PropTypes.string,
      style: PropTypes.object
    }),
    PropTypes.bool
  ])
}).isRequired;

export default sliderPropType;
