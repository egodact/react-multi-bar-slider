import React from 'react';
import Enzyme, { shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Progress from '../Progress';
import StyledProgress from '../Progress/StyledProgress';
import Dot from '../Progress/Dot';

Enzyme.configure({ adapter: new Adapter() });

beforeEach(() => {
  global.progressProps = {
    slider: {
      color: 'blue',
      progress: 39
    },
    height: 14,
    slidersEqual: true,
    equalColor: 'purple',
    roundedCorners: false,
    reversed: false,
    mouseDown: false,
    zIndex: 4
  };
});

afterEach(() => {
  delete global.progressProps;
});

/* global progressProps */
describe('Progress.js', () => {
  it('matches the snapshot', () => {
    const tree = renderer
      .create(<Progress {...progressProps} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    const progress = render(<Progress {...progressProps} />);
    expect(progress).toBeDefined();
  });

  it('renders a StyledProgress', () => {
    const progress = shallow(<Progress {...progressProps} />);
    expect(progress.find(StyledProgress).length).toBe(1);
  });

  it('renders a dot when given', () => {
    const progress = shallow(<Progress {...progressProps} />);
    expect(progress.find(Dot).length).toBe(0);

    progressProps.slider.dot = { color: 'grey' };
    const progress2 = shallow(<Progress {...progressProps} />);
    expect(progress2.find(Dot).length).toBe(1);
    expect(progress2.find(Dot).prop('dot')).toEqual({ color: 'grey' });
  });
});
