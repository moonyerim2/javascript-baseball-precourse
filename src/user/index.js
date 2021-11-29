import { constants } from "../constants/index.js";
import Validator from "../valid/index.js";

export default class UserInputGetter {
  constructor(userInput) {
    this.userInput = userInput;
    this.constrains = {
      max: constants.MAX_OF_RANGE,
      min: constants.MIN_OF_RANGE,
      length: constants.INPUT_LENGTH,
    };
  }

  isValid(value) {
    const validator = new Validator(value, this.constrains);
    return validator.isLengthCorrect() && validator.isNumber() && !validator.isDuplicated() && !validator.isZero();
  }

  getUserInput() {
    if (!this.isValid(this.userInput)) {
      alert("1~9까지의 수로 이루어진 중복없는 숫자를 입력해 주세요.");
      return [];
    }

    return this.userInput.split("");
  }
}
