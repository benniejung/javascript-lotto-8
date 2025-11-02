import { Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
class LottoGenerator {
  /**
   * 주어진 횟수만큼 Lotto 객체를 생성하여 배열로 반환
   * @param {number} count 생성할 로또 개수
   */
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
