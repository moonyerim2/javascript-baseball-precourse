import 

export default class BaseballGame {
  cunstructor() {
    this.computerInputNumbers = [];
    this.userInputNumbers = [];
  }

  generateRandomNumber() {
    const randomNumber = MissionUtils.Random.pickUniqueNumbersInRange(MIN_NUMBER, MAX_NUMBER, 3);
    return randomNumber;
  }
}

