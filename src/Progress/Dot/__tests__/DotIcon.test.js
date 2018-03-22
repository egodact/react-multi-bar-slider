import React from 'react';
import Enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import DotIcon from '../DotIcon';

Enzyme.configure({ adapter: new Adapter() });

beforeAll(() => {
  global.dotIconProps = {
    width: 45,
    height: 45
  };
});

afterAll(() => {
  delete global.dotIconProps;
});

/* global dotIconProps */
describe('DotIcon.js', () => {
  it('matches the snapshot', () => {
    const tree = renderer
      .create(<DotIcon {...dotIconProps} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    const dotIcon = render(<DotIcon {...dotIconProps} />);
    expect(dotIcon).toBeDefined();
  });
});
