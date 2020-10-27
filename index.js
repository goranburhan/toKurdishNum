export default (value) => {
  var kurdishNumbers = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
  if (value)
    return value.toString().replace(/[0-9]/g, (num) => kurdishNumbers[+num]);
  return value;
};
