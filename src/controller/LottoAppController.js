class LottoAppController {
  #inputView;

  constructor(inputView) {
    this.#inputView = inputView;
  }

  async run() {
    let lottoPurchaseAmount = await this.#inputView.readLottoPurchaseAmount();
  }
}

export default LottoAppController;
