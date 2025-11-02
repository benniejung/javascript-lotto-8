/**
 * 로또 번호를 관리하는 클래스
 */
class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#validateDuplicateNumbers(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
  #validateDuplicateNumbers(numbers) {
    if (numbers.length !== new Set(numbers).size) {
      throw new Error("[ERROR] 로또 번호에 중복된 숫자가 있습니다.");
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
