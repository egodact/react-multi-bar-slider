import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import transition from '../utils/transition';
import getHalf from '../utils/getHalf';

const StyledProgress = glamorous.div(
  {
    position: 'absolute',
    top: 0,
    right: 0
  },
  ({
    color,
    progress,
    height,
    equal,
    equalColor,
    roundedCorners,
    noTransition,
    zIndex
  }) => ({
    width: `${progress || 0}%`,
    height,
    backgroundColor: equal && equalColor ? equalColor : color,
    borderRadius: roundedCorners ? getHalf(height) : 0,
    zIndex,
    transition: noTransition ? 'none' : transition
  })
);

StyledProgress.propTypes = {
  color: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  equal: PropTypes.bool.isRequired,
  equalColor: PropTypes.string,
  roundedCorners: PropTypes.bool.isRequired,
  noTransition: PropTypes.bool.isRequired,
  zIndex: PropTypes.number.isRequired,
  css: PropTypes.object
};

export default StyledProgress;