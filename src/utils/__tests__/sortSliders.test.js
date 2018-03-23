import sortSliders from '../sortSliders';

describe('sortSliders.js', () => {
  it('sorts given sliders correctly', () => {
    const fakeSliders = [
      {
        props: {
          progress: 56
        }
      },
      {
        props: {
          progress: 31
        }
      },
      {
        props: {
          progress: 94
        }
      }
    ];
    expect(sortSliders(fakeSliders)).toEqual([
      {
        props: {
          progress: 94
        }
      },
      {
        props: {
          progress: 56
        }
      },
      {
        props: {
          progress: 31
        }
      }
    ]);
  });

  it('doesn\'t modify the sliders array', () => {
    const fakeSliders = [
      {
        props: {
          progress: 45
        }
      },
      {
        props: {
          progress: 86
        }
      }
    ];
    sortSliders(fakeSliders);
    expect(fakeSliders[0].props.progress).toBe(45);
  });
});
