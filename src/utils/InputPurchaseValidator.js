import { ERROR_MESSAGE } from "./Constants.js";
export function isValidIntegerPurchaseAmount(lottoPurchaseAmount) {
  if (
    isNaN(lottoPurchaseAmount) ||
    !Number.isInteger(lottoPurchaseAmount) || // 소수(소수점 숫자)인지 확인
    Number(lottoPurchaseAmount) < 0 // 음수인지 확인
  ) {
    throw new Error(ERROR_MESSAGE.INVALID_INTEGER_PURCHASE_AMOUNT);
  }
}

export function isValidDivisibleBy1000(lottoPurchaseAmount) {
  if (lottoPurchaseAmount % 1000 !== 0) {
    throw new Error(ERROR_MESSAGE.INVALID_DIVISIBLE_BY_1000_PURCHASE_AMOUNT);
  }
}
