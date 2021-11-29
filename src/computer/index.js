import { constants } from "../constants/index.js";

export default class ComputerInputGenerator {
  constructor() {
    this.conputerInput = this.generateComputerInput();
  }

  generateComputerInput() {
    const randomNumbers = new Set();

    while (randomNumbers.size < constants.INPUT_LENGTH) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(constants.MIN_OF_RANGE, constants.MAX_OF_RANGE);
      randomNumbers.add(String(randomNumber));
    }

    return [...randomNumbers];
  }
}
