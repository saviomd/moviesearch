const dateFormatList = {
  BR: "DD/MMM/YYYY",
  US: "MMM DD, YYYY"
};

const dateFormats = function(dateFormat) {
  return dateFormatList[dateFormat];
};

export default dateFormats;
