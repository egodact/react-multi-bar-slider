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
    expect(result).toBe(10);

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
    expect(result2).toBe(89);
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
    // Because JavaScript can't calculate .145 * 100 correctly it's 14 and not
    // 15
    expect(result).toBe(14);
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
    expect(result).toBe(100);

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
    expect(result2).toBe(0);
  });

  it('can be reversed', () => {
    const result = getProgressFromMousePosition({
      target: {
        classList: [],
        getBoundingClientRect: () => ({
          left: 100,
          width: 1000
        })
      },
      pageX: 200
    }, true);
    expect(result).toBe(90);
  });
});
