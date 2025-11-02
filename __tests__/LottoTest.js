import Lotto from "../src/Lotto";
import LottoResultChecker from "../src/model/LottoResultChecker.js";
import {
  isValidIntegerPurchaseAmount,
  isValidDivisibleBy1000,
} from "../src/utils/InputPurchaseValidator.js";

/**
 * @description Lotto 클래스 테스트
 */
describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  // TODO: 테스트가 통과하도록 프로덕션 코드 구현
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  // TODO: 추가 기능 구현에 따른 테스트 코드 작성
});

/**
 * @description 로또 구입 금액 입력 테스트
 */
describe("로또 구입 금액 입력 테스트", () => {
  test.each([
    { input: "abc", description: "문자열" },
    { input: -1000, description: "음수" },
    { input: 1000.5, description: "소수" },
  ])(
    "잘못된 입력 ($description)이 들어올 경우 예외가 발생한다.",
    ({ input }) => {
      expect(() => {
        isValidIntegerPurchaseAmount(input);
      }).toThrow("[ERROR] 로또 구입 금액은 정수로만 입력이 가능합니다.");
    }
  );

  test("로또 구입 금액이 1000원으로 나누어 떨어지지 않을 경우 예외가 발생한다.", () => {
    // 1. given 준비단계
    const input = 2025;

    // 2. when 실행단계 & 3. then 검증단계
    expect(() => {
      isValidDivisibleBy1000(input);
    }).toThrow("[ERROR] 로또 구입 금액은 1000원으로 나누어 떨어져야 합니다.");
  });

  // 보강 - 아무것도 입력안했을 경우
});

/**
 * @description 당첨 번호 입력 테스트
 */
describe("당첨 번호 입력 테스트", () => {
  test("당첨 번호에 콤마(,)가 없으면 예외가 발생한다.", () => {
    const input = "123456";
    expect(() => {
      new LottoResultChecker().setWinningNumbers(input);
    }).toThrow("[ERROR] 당첨 번호는 쉼표(,)로 구분되어야 합니다.");
  });

  test("당첨 번호는 6개의 숫자로 입력되지 않으면 예외가 발생한다.", () => {
    const input = "1,2,3,4,5,6,7";
    expect(() => {
      new LottoResultChecker().setWinningNumbers(input);
    }).toThrow("[ERROR] 당첨 번호는 6개의 숫자로 입력되어야 합니다.");
  });

  test("당첨 번호는 1~45 사이의 숫자로 입력되지 않으면 예외가 발생한다.", () => {
    const input = "1,2,3,4,5,46";
    expect(() => {
      new LottoResultChecker().setWinningNumbers(input);
    }).toThrow("[ERROR] 당첨 번호는 1~45 사이의 숫자로 입력되어야 합니다.");
  });

  test("당첨 번호는 중복된 숫자가 있으면 예외가 발생한다.", () => {
    const input = "1,2,3,4,5,5";
    expect(() => {
      new LottoResultChecker().setWinningNumbers(input);
    }).toThrow("[ERROR] 당첨 번호에 중복된 숫자가 있습니다.");
  });

  test("보너스 번호는 1~45 사이의 숫자로 입력되지 않으면 예외가 발생한다.", () => {
    const input = 46;
    expect(() => {
      new LottoResultChecker().setBonusNumber(input);
    }).toThrow("[ERROR] 보너스 번호는 1~45 사이의 숫자로 입력되어야 합니다.");
  });

  // 보너스 번호 - 콤마(,)나 커스텀 분리자로 구분되어있을 경우
});
