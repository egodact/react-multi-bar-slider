import limitProgress from '../limitProgress';

describe('limitProgress.js', () => {
  it('returns given progress when its >= 0 || <= 100', () => {
    expect(limitProgress(56)).toBe(56);
    expect(limitProgress(34)).toBe(34);
  });

  it('returns 0 when given progress is < 0', () => {
    expect(limitProgress(-5)).toBe(0);
    expect(limitProgress(-5056)).toBe(0);
  });

  it('returns 100 when given progress is > 100', () => {
    expect(limitProgress(145)).toBe(100);
    expect(limitProgress(1405)).toBe(100);
  });
});
