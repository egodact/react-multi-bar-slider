import getProgressFromMousePosition from '../getProgressFromMousePosition';

describe('getProgressFromMousePosition', () => {
  it('works correctly', () => {
    const result = getProgressFromMousePosition({
      target: {
        classList: [],
        getBoundingClientRect: () => ({
          left: 100,
          width: 1000
        })
      },
      pageX: 200
    });
    expect(result).toBe(90);

    const result2 = getProgressFromMousePosition({
      target: {
        classList: [],
        getBoundingClientRect: () => ({
          left: 154,
          width: 876
        })
      },
      pageX: 933.64
    });
    expect(result2).toBe(11);
  });

  it('rounds the percentage', () => {
    const result = getProgressFromMousePosition({
      target: {
        classList: [],
        getBoundingClientRect: () => ({
          left: 100,
          width: 1000
        })
      },
      pageX: 245
    });
    expect(result).toBe(86);
  });

  it('limits the progress', () => {
    const result = getProgressFromMousePosition({
      target: {
        classList: [],
        getBoundingClientRect: () => ({
          left: 100,
          width: 1000
        })
      },
      pageX: 1200
    });
    expect(result).toBe(0);

    const result2 = getProgressFromMousePosition({
      target: {
        classList: [],
        getBoundingClientRect: () => ({
          left: 100,
          width: 1000
        })
      },
      pageX: 0
    });
    expect(result2).toBe(100);
  });
});
