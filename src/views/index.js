import { constants } from "../constants/index.js";

export default class ViewManager {
  constructor(resultTxt) {
    this.resultTxt = resultTxt;
    this.win = `${constants.INPUT_LENGTH}스트라이크`;
  }

  winResultTemplate() {
    return `<h3>🎉  <strong>정답을 맞추셨습니다!</strong>  🎉</h3>
      <div>
        <span>게임을 새로 시작하시겠습니까?<span>
        <button id="game-restart-button">게임 재시작</button>
      </div>`;
  }

  renderResult() {
    const $result = document.querySelector("#result");

    if (this.resultTxt === this.win) {
      $result.innerHTML = this.winResultTemplate();
      return;
    }

    $result.innerText = this.resultTxt;
  }
}
