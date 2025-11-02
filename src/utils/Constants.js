const INPUT_MESSAGE = {
  LOTTO_PURCHASE_AMOUNT: "구입금액을 입력해 주세요.",
  LOTTO_NUMBER: "당첨 번호를 입력해 주세요.",
  LOTTO_BONUS_NUMBER: "보너스 번호를 입력해 주세요.",
};

const OUTPUT_MESSAGE = {
  LOTTO_PURCHASE_AMOUNT: "개를 구매했습니다.",
  LOTTO_RESULT: "\n당첨 통계\n---\n",
  LOTTO_RESULT_FIFTH_PRIZE: "3개 일치 (5,000원) - ",
  LOTTO_RESULT_FOURTH_PRIZE: "4개 일치 (50,000원) - ",
  LOTTO_RESULT_THIRD_PRIZE: "5개 일치 (1,500,000원) - ",
  LOTTO_RESULT_SECOND_PRIZE: "5개 일치, 보너스 볼 일치 (30,000,000원) - ",
  LOTTO_RESULT_FIRST_PRIZE: "6개 일치 (2,000,000,000원) - ",
};

const ERROR_MESSAGE = {
  INVALID_INTEGER_PURCHASE_AMOUNT:
    "[ERROR] 로또 구입 금액은 정수로만 입력이 가능합니다.",
  INVALID_DIVISIBLE_BY_1000_PURCHASE_AMOUNT:
    "[ERROR] 로또 구입 금액은 1000원으로 나누어 떨어져야 합니다.",
  INVALID_SIX_NUMBERS: "[ERROR] 당첨 번호는 6개의 숫자로 입력되어야 합니다.",
  INVALID_BONUS_NUMBER: "[ERROR] 보너스 번호는 1개의 숫자로 입력되어야 합니다.",
  INVALID_DUPLICATE_NUMBER: "[ERROR] 당첨 번호에 중복된 숫자가 있습니다.",
  INVALID_NUMBER_RANGE:
    "[ERROR] 당첨 번호는 1~45 사이의 숫자로 입력되어야 합니다.",
  INVALID_NUMBER_FORMAT: "[ERROR] 당첨 번호는 쉼표(,)로 구분되어야 합니다.",
  INVALID_BONUS_NUMBER_RANGE:
    "[ERROR] 보너스 번호는 1~45 사이의 숫자로 입력되어야 합니다.",
};

export { INPUT_MESSAGE, OUTPUT_MESSAGE, ERROR_MESSAGE };
