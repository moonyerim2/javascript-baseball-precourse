import { constants } from "./constants/index.js";

export default class BaseballGame {
  cunstructor() {
    this.computerInputNumbers = [];
    this.userInputNumbers = [];
  }

  generateRandomNumber() {
    const randomNumber = MissionUtils.Random.pickUniqueNumbersInRange(constants.MIN_OF_RANGE, constants.MAX_OF_RANGE, constants.INPUT_LENGTH);
    return randomNumber;
  }
}
