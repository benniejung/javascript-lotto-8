import { Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

/**
 * @description 로또 생성기 클래스
 */
class LottoGenerator {
  static generateLottos(count) {
    const lottos = [];
    for (let i = 0; i < count; i++) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      const lotto = new Lotto(numbers);
      lottos.push(lotto.getNumbers());
    }
    return lottos;
  }
}

export default LottoGenerator;
