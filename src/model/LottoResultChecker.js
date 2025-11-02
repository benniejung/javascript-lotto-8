/**
 * @description 로또 결과 체커 클래스
 */
import { Console } from "@woowacourse/mission-utils";
class LottoResultChecker {
  #winningNumbers;
  #bonusNumber;
  #totalPrizeAmount;
  #fifthPrizeCount;
  #fourthPrizeCount;
  #thirdPrizeCount;
  #secondPrizeCount;
  #firstPrizeCount;

  constructor() {
    this.#totalPrizeAmount = 0;
    this.#fifthPrizeCount = 0;
    this.#fourthPrizeCount = 0;
    this.#thirdPrizeCount = 0;
    this.#secondPrizeCount = 0;
    this.#firstPrizeCount = 0;
  }

  setLottos(winningNumbers) {
    this.#isValidCommaSeparatedNumbers(winningNumbers);
    this.#isValidSixNumbers(winningNumbers);
    this.#isValidNumberInRange(winningNumbers);
    this.#isValidDuplicateNumbers(winningNumbers);
    this.#winningNumbers = winningNumbers.split(",").map(Number);
  }
  setBonusNumber(bonusNumber) {
    this.#isValidBonusNumberInRange(bonusNumber);
    this.#bonusNumber = Number(bonusNumber);
  }

  checkResult(lottos) {
    lottos.forEach((lotto) => {
      let matchCount = 0;
      lotto.forEach((number) => {
        if (this.#winningNumbers.includes(number)) {
          matchCount++;
        }
      });

      const hasBonusNumber = lotto.includes(this.#bonusNumber);

      if (matchCount === 6) {
        this.#firstPrizeCount++;
      } else if (matchCount === 5 && hasBonusNumber) {
        this.#secondPrizeCount++;
      } else if (matchCount === 5) {
        this.#thirdPrizeCount++;
      } else if (matchCount === 4) {
        this.#fourthPrizeCount++;
      } else if (matchCount === 3) {
        this.#fifthPrizeCount++;
      }
    });

    // 당첨금액 계산
    this.calculateTotalPrizeAmount();

    return {
      firstPrizeCount: this.#firstPrizeCount,
      secondPrizeCount: this.#secondPrizeCount,
      thirdPrizeCount: this.#thirdPrizeCount,
      fourthPrizeCount: this.#fourthPrizeCount,
      fifthPrizeCount: this.#fifthPrizeCount,
    };
  }

  calculateTotalPrizeAmount() {
    const PRIZE_AMOUNTS = {
      first: 2000000000, // 1등: 6개 일치
      second: 30000000, // 2등: 5개 일치 + 보너스
      third: 1500000, // 3등: 5개 일치
      fourth: 50000, // 4등: 4개 일치
      fifth: 5000, // 5등: 3개 일치
    };

    this.#totalPrizeAmount =
      this.#firstPrizeCount * PRIZE_AMOUNTS.first +
      this.#secondPrizeCount * PRIZE_AMOUNTS.second +
      this.#thirdPrizeCount * PRIZE_AMOUNTS.third +
      this.#fourthPrizeCount * PRIZE_AMOUNTS.fourth +
      this.#fifthPrizeCount * PRIZE_AMOUNTS.fifth;
  }

  calculateProfitRate(totalPurchaseAmount) {
    // 수익률 = (총 당첨금액 / 총 구매금액) × 100
    return (this.#totalPrizeAmount / totalPurchaseAmount) * 100;
  }

  getLottos() {
    return this.#winningNumbers;
  }
  getBonusNumber() {
    return this.#bonusNumber;
  }

  #isValidCommaSeparatedNumbers(lottos) {
    if (!lottos.includes(",")) {
      throw new Error("[ERROR] 당첨 번호는 쉼표(,)로 구분되어야 합니다.");
    }
  }
  #isValidSixNumbers(lottos) {
    lottos = lottos.split(",");
    if (lottos.length !== 6) {
      throw new Error("[ERROR] 당첨 번호는 6개의 숫자로 입력되어야 합니다.");
    }
  }
  #isValidNumberInRange(lottos) {
    lottos = lottos.split(",").map(Number);
    lottos.forEach((lotto) => {
      if (lotto < 1 || lotto > 45) {
        throw new Error(
          "[ERROR] 당첨 번호는 1~45 사이의 숫자로 입력되어야 합니다."
        );
      }
    });
  }
  #isValidDuplicateNumbers(lottos) {
    lottos = lottos.split(",").map(Number);
    if (lottos.length !== new Set(lottos).size) {
      throw new Error("[ERROR] 당첨 번호에 중복된 숫자가 있습니다.");
    }
  }

  #isValidBonusNumberInRange(bonusNumber) {
    if (Number(bonusNumber) < 1 || Number(bonusNumber) > 45) {
      throw new Error(
        "[ERROR] 보너스 번호는 1~45 사이의 숫자로 입력되어야 합니다."
      );
    }
  }
}

export default LottoResultChecker;
