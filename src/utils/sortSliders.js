const sortSliders = sliders =>
  [...sliders].sort(
    (a, b) => b.props.progress - a.props.progress
  );

export default sortSliders;
