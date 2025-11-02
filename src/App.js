import LottoAppController from "./controller/LottoAppController.js";
import InputView from "./view/InputView.js";
import OutputView from "./view/OutputView.js";
import LottoResultChecker from "./model/LottoResultChecker.js";
class App {
  async run() {
    const INPUT_VIEW = new InputView();
    const OUTPUT_VIEW = new OutputView();
    const LOTTO_RESULT_CHECKER = new LottoResultChecker();

    const LOTTO_APP_CONTROLLER = new LottoAppController(
      INPUT_VIEW,
      OUTPUT_VIEW,
      LOTTO_RESULT_CHECKER
    );
    await LOTTO_APP_CONTROLLER.run();
  }
}

export default App;
