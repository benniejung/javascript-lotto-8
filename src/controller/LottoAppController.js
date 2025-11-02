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

      // 로또 발행 후 출력
      let myLottos = LottoGenerator.generateLottos(lottoPurchaseAmount / 1000);
      await this.#outputView.printLottos(myLottos);

      // 당첨 번호와 보너스 번호 입력
      let winningNumbers = await this.#inputView.readLottoNumbers();
      this.#lottoResultChecker.setWinningNumbers(winningNumbers);

      let bonusNumber = await this.#inputView.readBonusNumber();
      this.#lottoResultChecker.setBonusNumber(bonusNumber);

      // 당첨 내역 출력
      let result = this.#lottoResultChecker.checkResult(myLottos);
      this.#outputView.printResult(result);

      // 수익률 계산 및 출력
      const profitRate =
        this.#lottoResultChecker.calculateProfitRate(lottoPurchaseAmount);
      this.#outputView.printProfitRate(profitRate);
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default LottoAppController;
