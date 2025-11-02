import { Console } from "@woowacourse/mission-utils";

class OutputView {
  printLottos(lottos) {
    Console.print(`\n${lottos.length}개를 구매했습니다.`);
    lottos.forEach((lotto) => {
      const numbers = [...lotto].sort((a, b) => a - b);
      Console.print(`[${numbers.join(", ")}]`);
    });
  }

  printResult(result) {
    Console.print(`\n당첨 통계\n---\n`);
    Console.print(`3개 일치 (5,000원) - ${result.fifthPrizeCount}개`);
    Console.print(`4개 일치 (50,000원) - ${result.fourthPrizeCount}개`);
    Console.print(`5개 일치 (1,500,000원) - ${result.thirdPrizeCount}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${result.secondPrizeCount}개`
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${result.firstPrizeCount}개`);
  }
  printProfitRate(profitRate) {
    Console.print(`\n총 수익률은 ${profitRate.toFixed(1)}%입니다.\n`);
  }
}

export default OutputView;
