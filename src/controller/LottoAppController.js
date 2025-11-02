import {
  isValidDivisibleBy1000,
  isValidIntegerPurchaseAmount,
} from "../utils/Validator.js";
import LottoGenerator from "../LottoGenerator.js";
import { Console } from "@woowacourse/mission-utils";

class LottoAppController {
  #inputView;
  #outputView;
  #lottoResultChecker;
  constructor(inputView, outputView, lottoResultChecker) {
    this.#inputView = inputView;
    this.#outputView = outputView;
    this.#lottoResultChecker = lottoResultChecker;
  }

  async run() {
    try {
      let lottoPurchaseAmount = Number(
        await this.#inputView.readLottoPurchaseAmount()
      );
      isValidIntegerPurchaseAmount(lottoPurchaseAmount);
      isValidDivisibleBy1000(lottoPurchaseAmount);

      // 로또 발행
      let myLottos = LottoGenerator.generateLottos(lottoPurchaseAmount / 1000);
      await this.#outputView.printLottos(myLottos);

      let winningNumbers = await this.#inputView.readLottoNumbers();
      this.#lottoResultChecker.setLottos(winningNumbers);

      let bonusNumber = await this.#inputView.readBonusNumber();
      this.#lottoResultChecker.setBonusNumber(bonusNumber);

      let result = this.#lottoResultChecker.checkResult(myLottos);
      this.#outputView.printResult(result);

      const profitRate =
        this.#lottoResultChecker.calculateProfitRate(lottoPurchaseAmount);
      this.#outputView.printProfitRate(profitRate);
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default LottoAppController;
