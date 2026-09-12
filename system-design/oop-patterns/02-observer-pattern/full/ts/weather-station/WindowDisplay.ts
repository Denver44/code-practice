import type { IObserver } from './IObserver';
import type { WeatherStation } from './WeatherStation';

export class WindowDisplay implements IObserver {
  constructor(private station: WeatherStation) {}

  update(): void {
    console.log(`Window: ${this.station.getTemperature()} degrees outside.`);
  }
}
