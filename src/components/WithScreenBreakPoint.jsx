import PropTypes from 'prop-types';

const Small = 'Small';
const Medium = 'Medium';
const Large = 'Large';
export const screenSizes = { Small, Medium, Large };

const WithScreenBreakPoint = (width) => {
  console.log(width);

  const screenSize = { Small: false, Medium: false, Large: false };
  if (width > 1000) {
    screenSize[Large] = true;
  } else if (width > 600) {
    screenSize[Medium] = true;
  } else {
    screenSize[Small] = true;
  }
  return (screenSize);
};

export default WithScreenBreakPoint;
export const withScreenPropTypes = {
  screenSize: {
    Large: PropTypes.bool,
    Medium: PropTypes.bool,
    Small: PropTypes.bool,
  },
};
