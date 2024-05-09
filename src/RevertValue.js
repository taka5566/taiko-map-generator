export function revertValue(value) {
  // Ensure the input value is within the range of 0-0.9
  if (value < 0) {
    value = 0;
  } else if (value > 0.9) {
    value = 0.9;
  }

  // Revert the input value
  var revertedValue = 0.9 - value;

  return revertedValue;
}


export default revertValue();