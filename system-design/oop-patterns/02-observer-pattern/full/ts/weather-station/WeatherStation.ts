import type { IObservable } from './IObservable';
import type { IObserver } from './IObserver';

export class WeatherStation implements IObservable {
  private observers: IObserver[] = [];
  private temperature = 0;

  add(observer: IObserver): void {
    this.observers.push(observer);
  }

  remove(observer: IObserver): void {
    this.observers = this.observers.filter((o) => o !== observer);
  }

  notify(): void {
    for (const observer of this.observers) {
      observer.update();
    }
  }

  getTemperature(): number {
    return this.temperature;
  }

  setTemperature(temperature: number): void {
    this.temperature = temperature;
    this.notify();
  }
}
