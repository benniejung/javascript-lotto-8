import Lotto from "../src/Lotto";
import {
  isValidIntegerPurchaseAmount,
  isValidDivisibleBy1000,
} from "../src/utils/Validator.js";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  // TODO: 테스트가 통과하도록 프로덕션 코드 구현
  /*   test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  }); */

  // TODO: 추가 기능 구현에 따른 테스트 코드 작성
});

describe("로또 구입 금액 입력 테스트", () => {
  test.each([
    { input: "abc", description: "문자열" },
    { input: -1000, description: "음수" },
    { input: 1000.5, description: "소수" },
  ])(
    "잘못된 입력 ($description)이 들어올 경우 예외가 발생한다.",
    ({ input }) => {
      expect(() => {
        isValidIntegerPurchaseAmount(Number(input));
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
});
