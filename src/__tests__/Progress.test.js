import React from 'react';
import Enzyme, { shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Progress from '../Progress';
import StyledProgress from '../Progress/StyledProgress';
import Dot from '../Dot';

Enzyme.configure({ adapter: new Adapter() });

beforeEach(() => {
  global.progressProps = {
    color: 'blue',
    progress: 39,
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

  it('passes on undocumented props to the StyledProgress', () => {
    const progress = shallow(<Progress {...progressProps} foo="bar" />);
    expect(progress.find(StyledProgress).prop('foo')).toBe('bar');
  });

  it('renders all children', () => {
    const progress = shallow(<Progress {...progressProps}><span /></Progress>);
    expect(progress.find('span').length).toBe(1);
  });

  it('passes the correct props to its Dot child when given', () => {
    const progress = shallow(<Progress {...progressProps}><Dot /></Progress>);
    expect(progress.find(Dot).props()).toEqual({
      progressColor: 'blue',
      reversed: false,
      mouseDown: false
    });
  });
});
