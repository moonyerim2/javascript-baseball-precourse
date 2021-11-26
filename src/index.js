import { constants } from "./constants/index.js";

export default class BaseballGame {
  constructor() {
    this.computerInput = "";
    this.userInput = "";
    this.constrains = {
      max: constants.MAX_OF_RANGE,
      min: constants.MIN_OF_RANGE,
      length: constants.INPUT_LENGTH,
    };
  }

  generateComputerInput() {
    const randomNumbers = new Set();

    while (true) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(this.constrains.min, this.constrains.max);
      randomNumbers.add(randomNumber);

      if (randomNumbers.size === this.constrains.length) {
        this.computerInput = [...randomNumbers].join("");
        return;
      }
    }
  }
}
