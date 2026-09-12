export class WeatherStation {
  #observers = [];
  #temperature = 0;

  add(observer) {
    this.#observers.push(observer);
  }

  remove(observer) {
    this.#observers = this.#observers.filter((o) => o !== observer);
  }

  notify() {
    for (const observer of this.#observers) {
      observer.update();
    }
  }

  getTemperature() {
    return this.#temperature;
  }

  setTemperature(temperature) {
    this.#temperature = temperature;
    this.notify();
  }
}
