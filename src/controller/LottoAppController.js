import {
  isValidDivisibleBy1000,
  isValidIntegerPurchaseAmount,
} from "../utils/Validator.js";
import LottoGenerator from "../LottoGenerator.js";
import { Console } from "@woowacourse/mission-utils";

class LottoAppController {
  #inputView;
  #outputView;
  constructor(inputView, outputView) {
    this.#inputView = inputView;
    this.#outputView = outputView;
  }

  async run() {
    let lottoPurchaseAmount = Number(
      await this.#inputView.readLottoPurchaseAmount()
    );
    isValidIntegerPurchaseAmount(lottoPurchaseAmount);
    isValidDivisibleBy1000(lottoPurchaseAmount);

    // 로또 발행
    const myLottos = LottoGenerator.generateLottos(lottoPurchaseAmount / 1000);
    await this.#outputView.printLottos(myLottos);
  }
}

export default LottoAppController;
