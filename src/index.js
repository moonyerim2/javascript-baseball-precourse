import { constants } from "./constants/index.js";
import Validator from "./valid/index.js";

export default class BaseballGame {
  constructor() {
    this.computerInput = [];
    this.userInput = [];
    this.constrains = {
      max: constants.MAX_OF_RANGE,
      min: constants.MIN_OF_RANGE,
      length: constants.INPUT_LENGTH,
    };
    this.gameResult = {
      strike: 0,
      ball: 0,
    };
  }

  generateComputerInput() {
    const randomNumbers = new Set();

    while (true) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(this.constrains.min, this.constrains.max);
      randomNumbers.add(String(randomNumber));

      if (randomNumbers.size === this.constrains.length) {
        this.computerInput = [...randomNumbers];
        return;
      }
    }
  }

  isValid(value) {
    const validator = new Validator(value, this.constrains);
    return validator.isLengthCorrect() && validator.isNumber() && !validator.isDuplicated() && !validator.isZero();
  }

  getUserInput(userInput) {
    if (!this.isValid(userInput)) {
      alert("1~9까지의 수로 이루어진 중복없는 숫자를 입력해 주세요.");
    }
    this.userInput = userInput.split("");
  }

  compareInputs() {
    this.userInput.forEach((digit, i) => {
      const indexOfUserDigit = i;
      const indexOfComputerDigit = this.computerInput.indexOf(digit);

      if (indexOfComputerDigit === -1) {
        return;
      } else if (indexOfComputerDigit === indexOfUserDigit) {
        this.gameResult.strike += 1;
      } else if (indexOfComputerDigit !== indexOfUserDigit) {
        this.gameResult.ball += 1;
      }
    });
  }

  play() {
    const $userInput = document.querySelector("#user-input");
    const $submitBtn = document.querySelector("#submit");

    this.generateComputerInput();

    $submitBtn.addEventListener("click", e => {
      e.preventDefault();
      const inputText = $userInput.value;
      this.getUserInput(inputText);
      this.compareInputs();
    });
  }
}

