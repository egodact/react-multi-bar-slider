import getHalf from '../getHalf';

describe('getHalf.js', () => {
  it('returns its value divided by 2', () => {
    expect(getHalf(8)).toBe(4);
    expect(getHalf(7)).toBe(3.5);
  });

  it('works for CSS units', () => {
    expect(getHalf('10px')).toBe('5px');
    expect(getHalf('70%')).toBe('35%');
    expect(getHalf('12em')).toBe('6em')
    expect(getHalf('46rem')).toBe('23rem');
    expect(getHalf('68vw')).toBe('34vw');
    expect(getHalf('56vh')).toBe('28vh');
  });

  it('correctly handles floats', () => {
    expect(getHalf('7px')).toBe('3.5px');
    expect(getHalf('3.5px')).toBe('1.75px');
  });
});
