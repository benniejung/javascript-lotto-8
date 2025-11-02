import LottoAppController from "./controller/LottoAppController.js";
import InputView from "./view/InputView.js";

class App {
  async run() {
    const INPUT_VIEW = new InputView();
    const LOTTO_APP_CONTROLLER = new LottoAppController(INPUT_VIEW);
    await LOTTO_APP_CONTROLLER.run();
  }
}

export default App;
