export function Convert(InputNumber) {
  if (InputNumber < 0) {
    InputNumber = InputNumber * -1;
    return InputNumber;
  } else {
    return InputNumber;
  }
}
