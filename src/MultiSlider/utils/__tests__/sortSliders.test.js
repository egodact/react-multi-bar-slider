import sortSliders from '../sortSliders';

describe('sortSliders.js', () => {
  it('sorts given sliders correctly', () => {
    const fakeSliders = [
      {
        progress: 56
      },
      {
        progress: 31
      },
      {
        progress: 94
      }
    ];
    expect(sortSliders(fakeSliders)).toEqual([
      {
        progress: 94
      },
      {
        progress: 56
      },
      {
        progress: 31
      }
    ]);
  });

  it('doesn\'t modify the sliders array', () => {
    const fakeSliders = [
      {
        progress: 45
      },
      {
        progress: 86
      }
    ];
    sortSliders(fakeSliders);
    expect(fakeSliders[0].progress).toBe(45);
  });
});
