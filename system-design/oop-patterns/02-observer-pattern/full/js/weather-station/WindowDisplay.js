export class WindowDisplay {
  #station;

  constructor(station) {
    this.#station = station;
  }

  update() {
    console.log(`Window: ${this.#station.getTemperature()} degrees outside.`);
  }
}
