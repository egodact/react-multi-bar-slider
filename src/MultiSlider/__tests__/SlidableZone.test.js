import React from 'react';
import Enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import SlidableZone from '../SlidableZone';

Enzyme.configure({ adapter: new Adapter() });

beforeAll(() => {
  global.slidableZoneProps = {
    size: 40,
    zIndex: 5
  };
});

afterAll(() => {
  delete global.slidableZoneProps;
});

describe('SlidableZone.js', () => {
  it('matches the snapshot', () => {
    const tree = renderer
      .create(<SlidableZone {...slidableZoneProps} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    const slidableZone = render(<SlidableZone {...slidableZoneProps} />);
    expect(slidableZone).toBeDefined();
  });
});
