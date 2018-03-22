import React from 'react';
import Enzyme, { shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Dot from '../Dot';
import StyledDot from '../Dot/StyledDot';
import DotIcon from '../Dot/DotIcon';

Enzyme.configure({ adapter: new Adapter() });

beforeEach(() => {
  global.dotProps = {
    dot: {
      width: 40,
      height: 40,
      color: 'green',
      style: { color: 'purple' }
    },
    sliderColor: 'blue',
    reversed: false,
    mouseDown: false
  };
});

afterEach(() => {
  delete global.dotProps;
});

/* global dotProps */
describe('Dot.js', () => {
  it('matches the snapshot', () => {
    const tree = renderer
      .create(<Dot {...dotProps} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    const dot = render(<Dot {...dotProps} />);
    expect(dot).toBeDefined();
  });

  it('renders a StyledDot', () => {
    const dot = shallow(<Dot {...dotProps} />);
    expect(dot.find(StyledDot).length).toBe(1);
  });

  it('renders a DotIcon when an icon is given', () => {
    const dot = shallow(<Dot {...dotProps} />);
    expect(dot.find(DotIcon).length).toBe(0);

    dotProps.dot.icon = 'foo.png';
    const dot2 = shallow(<Dot {...dotProps} />);
    expect(dot2.find(DotIcon).length).toBe(1)
    expect(dot2.find(DotIcon).prop('src')).toBe('foo.png');
  });
});
