import React from 'react';
import Enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import StyledProgress from '../StyledProgress';

Enzyme.configure({ adapter: new Adapter() });

beforeAll(() => {
  global.styledProgressProps = {
    color: 'green',
    progress: 7,
    height: 14,
    equal: true,
    equalColor: 'purple',
    roundedCorners: false,
    reversed: false,
    noTransition: false,
    zIndex: 4
  };
});

afterAll(() => {
  delete global.styledProgressProps;
});

/* global styledProgressProps */
describe('StyledProgress.js', () => {
  it('matches the snapshot', () => {
    const tree = renderer
      .create(<StyledProgress {...styledProgressProps} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    const styledProgress = render(<StyledProgress {...styledProgressProps} />);
    expect(styledProgress).toBeDefined();
  });
});
