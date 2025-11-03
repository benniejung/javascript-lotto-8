import { PRIZE_AMOUNTS, ERROR_MESSAGE } from "../utils/Constants.js";

let prizeTypes = {
  firstPrizeCount: 0,
  secondPrizeCount: 0,
  thirdPrizeCount: 0,
  fourthPrizeCount: 0,
  fifthPrizeCount: 0,
};

/**
 * @description 로또 결과 체커 클래스: 로또 자동 채점기 역할
 */
class LottoResultChecker {
  #winningNumbers;
  #bonusNumber;
  #totalPrizeAmount;

  constructor() {
    this.#winningNumbers = [];
    this.#bonusNumber = 0;
    this.#totalPrizeAmount = 0;
  }

  setWinningNumbers(winningNumbers) {
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
    // 당첨 번호와 보너스 번호를 비교하여 당첨 내역 계산
    lottos.forEach((lotto) => {
      let matchCount = 0;
      lotto.forEach((number) => {
        if (this.#winningNumbers.includes(number)) {
          matchCount++;
        }
      });

      const hasBonusNumber = lotto.includes(this.#bonusNumber);
      this.#updatePrizeCount(matchCount, hasBonusNumber);
    });

    // 당첨금액 계산
    this.calculateTotalPrizeAmount();

    return {
      prizeTypes: prizeTypes,
    };
  }

  #updatePrizeCount(matchCount, hasBonusNumber) {
    switch (matchCount) {
      case 6:
        prizeTypes.firstPrizeCount++;
        break;
      case 5:
        if (hasBonusNumber) {
          prizeTypes.secondPrizeCount++;
        } else {
          prizeTypes.thirdPrizeCount++;
        }
        break;
      case 4:
        prizeTypes.fourthPrizeCount++;
        break;
      case 3:
        prizeTypes.fifthPrizeCount++;
        break;
    }
  }

  calculateTotalPrizeAmount() {
    this.#totalPrizeAmount =
      prizeTypes.firstPrizeCount * PRIZE_AMOUNTS.first +
      prizeTypes.secondPrizeCount * PRIZE_AMOUNTS.second +
      prizeTypes.thirdPrizeCount * PRIZE_AMOUNTS.third +
      prizeTypes.fourthPrizeCount * PRIZE_AMOUNTS.fourth +
      prizeTypes.fifthPrizeCount * PRIZE_AMOUNTS.fifth;
  }

  calculateProfitRate(purchaseAmount) {
    // 수익률 = (총 당첨금액 / 총 구매금액) × 100
    return (this.#totalPrizeAmount / purchaseAmount) * 100;
  }

  getWinningNumbers() {
    return this.#winningNumbers;
  }
  getBonusNumber() {
    return this.#bonusNumber;
  }

  #isValidCommaSeparatedNumbers(lottos) {
    if (!lottos.includes(",")) {
      throw new Error(ERROR_MESSAGE.INVALID_NUMBER_FORMAT);
    }
  }
  #isValidSixNumbers(lottos) {
    lottos = lottos.split(",");
    if (lottos.length !== 6) {
      throw new Error(ERROR_MESSAGE.INVALID_SIX_NUMBERS);
    }
  }
  #isValidNumberInRange(lottos) {
    lottos = lottos.split(",").map(Number);
    lottos.forEach((lotto) => {
      if (lotto < 1 || lotto > 45) {
        throw new Error(ERROR_MESSAGE.INVALID_NUMBER_RANGE);
      }
    });
  }
  #isValidDuplicateNumbers(lottos) {
    lottos = lottos.split(",").map(Number);
    if (lottos.length !== new Set(lottos).size) {
      throw new Error(ERROR_MESSAGE.INVALID_DUPLICATE_NUMBER);
    }
  }

  #isValidBonusNumberInRange(bonusNumber) {
    if (Number(bonusNumber) < 1 || Number(bonusNumber) > 45) {
      throw new Error(ERROR_MESSAGE.INVALID_BONUS_NUMBER_RANGE);
    }
  }
}

export default LottoResultChecker;
