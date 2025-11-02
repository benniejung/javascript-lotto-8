export function isValidIntegerPurchaseAmount(lottoPurchaseAmount) {
  if (
    isNaN(lottoPurchaseAmount) ||
    !Number.isInteger(lottoPurchaseAmount) || // 소수(소수점 숫자)인지 확인
    Number(lottoPurchaseAmount) < 0 // 음수인지 확인
  ) {
    throw new Error("[ERROR] 로또 구입 금액은 정수로만 입력이 가능합니다.");
  }
}

export function isValidDivisibleBy1000(lottoPurchaseAmount) {
  if (lottoPurchaseAmount % 1000 !== 0) {
    throw new Error(
      "[ERROR] 로또 구입 금액은 1000원으로 나누어 떨어져야 합니다."
    );
  }
}
