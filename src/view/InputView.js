import { Console } from "@woowacourse/mission-utils";

class InputView {
  readLottoPurchaseAmount() {
    return Console.readLineAsync("구입금액을 입력해 주세요.");
  }

  readLottoNumbers() {
    return Console.readLineAsync("당첨 번호를 입력해 주세요.");
  }

  readBonusNumber() {
    return Console.readLineAsync("보너스 번호를 입력해 주세요.");
  }
}

export default InputView;
