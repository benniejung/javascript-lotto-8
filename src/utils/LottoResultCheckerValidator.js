import { ERROR_MESSAGE } from "./Constants.js";

function isValidCommaSeparatedNumbers(lottos) {
  if (!lottos.includes(",")) {
    throw new Error(ERROR_MESSAGE.INVALID_NUMBER_FORMAT);
  }
}
function isValidSixNumbers(lottos) {
  lottos = lottos.split(",");
  if (lottos.length !== 6) {
    throw new Error(ERROR_MESSAGE.INVALID_SIX_NUMBERS);
  }
}
function isValidNumberInRange(lottos) {
  lottos = lottos.split(",").map(Number);
  lottos.forEach((lotto) => {
    if (lotto < 1 || lotto > 45) {
      throw new Error(ERROR_MESSAGE.INVALID_NUMBER_RANGE);
    }
  });
}
function isValidDuplicateNumbers(lottos) {
  lottos = lottos.split(",").map(Number);
  if (lottos.length !== new Set(lottos).size) {
    throw new Error(ERROR_MESSAGE.INVALID_DUPLICATE_NUMBER);
  }
}

function isValidBonusNumberInRange(bonusNumber) {
  if (Number(bonusNumber) < 1 || Number(bonusNumber) > 45) {
    throw new Error(ERROR_MESSAGE.INVALID_BONUS_NUMBER_RANGE);
  }
}
function isValidNotEmpty(value) {
  if (value === "") {
    throw new Error(ERROR_MESSAGE.INVALID_NOT_EMPTY);
  }
}

export {
  isValidCommaSeparatedNumbers,
  isValidSixNumbers,
  isValidNumberInRange,
  isValidDuplicateNumbers,
  isValidBonusNumberInRange,
  isValidNotEmpty,
};
