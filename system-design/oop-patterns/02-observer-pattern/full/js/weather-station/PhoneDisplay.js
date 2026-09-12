export class PhoneDisplay {
  #station;

  constructor(station) {
    this.#station = station;
  }

  update() {
    console.log(`Phone: it's now ${this.#station.getTemperature()} degrees.`);
  }
}
