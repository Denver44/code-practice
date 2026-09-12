import type { IObserver } from './IObserver';
import type { WeatherStation } from './WeatherStation';

export class PhoneDisplay implements IObserver {
  constructor(private station: WeatherStation) {}

  update(): void {
    console.log(`Phone: it's now ${this.station.getTemperature()} degrees.`);
  }
}
