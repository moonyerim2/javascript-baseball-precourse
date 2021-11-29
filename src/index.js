import ViewManager from "./views/index.js";
import ComputerInputGenerator from "./computer/index.js";
import UserInputGetter from "./user/index.js";

export default class BaseballGame {
  constructor() {
    this.computerInput = new ComputerInputGenerator().conputerInput;
    this.userInput = [];
    this.gameResult = {
      strike: 0,
      ball: 0,
    };
  }

  getUserInput(userInput) {
    const userInputGetter = new UserInputGetter(userInput);
    this.userInput = userInputGetter.getUserInput();
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

  calculateResult() {
    const ballCount = this.gameResult.ball;
    const strikeCount = this.gameResult.strike;
    let resultTxt = `${ballCount}볼 ${strikeCount}스트라이크`;

    if (ballCount === 0 && strikeCount === 0) {
      resultTxt = `낫싱`;
    } else if (ballCount === 0) {
      resultTxt = `${strikeCount}스트라이크`;
    } else if (strikeCount === 0) {
      resultTxt = `${ballCount}볼`;
    }

    return resultTxt;
  }

  resetGameResult() {
    this.gameResult.strike = 0;
    this.gameResult.ball = 0;
  }

  play() {
    if (!this.userInput.length) {
      return;
    }
    this.compareInputs();
    const resultTxt = this.calculateResult();

    return resultTxt;
  }

  renderResult(resultTxt) {
    if (resultTxt !== undefined) {
      const view = new ViewManager(resultTxt);
      view.renderResult();
    }
  }

  onSubmitEvent() {
    const $userInput = document.querySelector("#user-input");
    const $submitBtn = document.querySelector("#submit");

    $submitBtn.addEventListener("click", e => {
      e.preventDefault();
      const inputText = $userInput.value;
      this.getUserInput(inputText);

      const resultTxt = this.play();
      this.renderResult(resultTxt);
      this.resetGameResult();
    });
  }

  onRestartEvent() {
    const $result = document.querySelector("#result");
    const $userInput = document.querySelector("#user-input");

    $result.addEventListener("click", e => {
      if (e.target.id === "game-restart-button") {
        this.computerInput = new ComputerInputGenerator().conputerInput;
        this.userInput = [];

        $result.innerText = "";
        $userInput.value = "";
      }
    });
  }

  init() {
    this.onSubmitEvent();
    this.onRestartEvent();
  }
}

const game = new BaseballGame();
game.init();
