import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGE } from "../utils/Constants.js";

class OutputView {
  printLottos(lottos) {
    Console.print(`\n${lottos.length}${OUTPUT_MESSAGE.LOTTO_PURCHASE_AMOUNT}`);
    lottos.forEach((lotto) => {
      const numbers = [...lotto].sort((a, b) => a - b);
      Console.print(`[${numbers.join(", ")}]`);
    });
  }

  printResult(result) {
    Console.print(`${OUTPUT_MESSAGE.LOTTO_RESULT}`);
    Console.print(
      `${OUTPUT_MESSAGE.LOTTO_RESULT_FIFTH_PRIZE}${result.fifthPrizeCount}개`
    );
    Console.print(
      `${OUTPUT_MESSAGE.LOTTO_RESULT_FOURTH_PRIZE}${result.fourthPrizeCount}개`
    );
    Console.print(
      `${OUTPUT_MESSAGE.LOTTO_RESULT_THIRD_PRIZE}${result.thirdPrizeCount}개`
    );
    Console.print(
      `${OUTPUT_MESSAGE.LOTTO_RESULT_SECOND_PRIZE}${result.secondPrizeCount}개`
    );
    Console.print(
      `${OUTPUT_MESSAGE.LOTTO_RESULT_FIRST_PRIZE}${result.firstPrizeCount}개`
    );
  }
  printProfitRate(profitRate) {
    Console.print(`\n총 수익률은 ${profitRate.toFixed(1)}%입니다.\n`);
  }
}

export default OutputView;
