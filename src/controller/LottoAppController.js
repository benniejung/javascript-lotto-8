import {
  isValidDivisibleBy1000,
  isValidIntegerPurchaseAmount,
} from "../utils/Validator.js";

class LottoAppController {
  #inputView;

  constructor(inputView) {
    this.#inputView = inputView;
  }

  async run() {
    let lottoPurchaseAmount = Number(
      await this.#inputView.readLottoPurchaseAmount()
    );
    isValidIntegerPurchaseAmount(lottoPurchaseAmount);
    isValidDivisibleBy1000(lottoPurchaseAmount);
  }
}

export default LottoAppController;
