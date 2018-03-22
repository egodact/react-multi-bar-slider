import React from 'react';
import Enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import StyledDot from '../StyledDot';

Enzyme.configure({ adapter: new Adapter() });

beforeAll(() => {
  global.styledDotProps = {
    hasIcon: false,
    width: 30,
    height: 30,
    color: 'green',
    reversed: false,
    noTransition: false
  };
});

afterAll(() => {
  delete global.styledDotProps;
});

describe('StyledDot.js', () => {
  it('matches the snapshot', () => {
    const tree = renderer
      .create(<StyledDot {...styledDotProps} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    const styledDot = render(<StyledDot {...styledDotProps} />);
    expect(styledDot).toBeDefined();
  });
});
