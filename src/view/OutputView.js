import { Console } from "@woowacourse/mission-utils";

class OutputView {
  printLottos(lottos) {
    Console.print(`\n${lottos.length}개를 구매했습니다.`);
    lottos.forEach((lotto) => {
      Console.print(`[${lotto.join(", ")}]`);
    });
  }
}

export default OutputView;
