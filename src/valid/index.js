export default class Validator {
  constructor(constrains) {
      this.value = constrains.value;
      this.max = constrains.max;
      this.min = constrains.min;
      this.length = constrains.length;
  }

  isNumber() {
    const valueToNumber = Number(this.value);
    return !Number.isNaN(valueToNumber);
  }

  isDuplicated() {
    const tempSet = new Set(this.value);
    return this.value.length !== tempSet.size;
  }

  isLengthCorrect() {
    return this.value.length === this.length;
  }

  isZero() {
    const ZERO = "0";
    const indexOfZero = this.value.indexOf(ZERO);

    if (indexOfZero === -1) {
      return false;
    }

    return true;
  }
}
