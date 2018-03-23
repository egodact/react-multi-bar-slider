import MultiSlider, { Progress, Dot } from '../index';

describe('index.js', () => {
  it('exports MultiSlider as default', () => {
    expect(MultiSlider).toBeDefined();
  });

  it('exports Progress and Dot', () => {
    expect(Progress).toBeDefined();
    expect(Dot).toBeDefined();
  });
});
