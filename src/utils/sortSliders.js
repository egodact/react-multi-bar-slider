const sortSliders = sliders =>
  [...sliders].sort((a, b) => b.progress - a.progress);

export default sortSliders;
