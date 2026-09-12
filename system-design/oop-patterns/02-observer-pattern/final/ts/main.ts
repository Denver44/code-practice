// Observer Pattern - final
//
// WeatherStation keeps a list of observers and calls update() on each one
// the moment its temperature changes, instead of any display having to
// poll for changes. PhoneDisplay saves a reference to the station in its
// constructor so it can read the new value once it's been told about it.

interface IObserver {
  update(): void;
}

interface IObservable {
  add(observer: IObserver): void;
  remove(observer: IObserver): void;
  notify(): void;
}

class WeatherStation implements IObservable {
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

class PhoneDisplay implements IObserver {
  constructor(private station: WeatherStation) {}

  update(): void {
    console.log(`Phone: it's now ${this.station.getTemperature()} degrees.`);
  }
}

class WindowDisplay implements IObserver {
  constructor(private station: WeatherStation) {}

  update(): void {
    console.log(`Window: ${this.station.getTemperature()} degrees outside.`);
  }
}

const station = new WeatherStation();

const phone = new PhoneDisplay(station);
const window_ = new WindowDisplay(station);
station.add(phone);
station.add(window_);

station.setTemperature(72);
station.setTemperature(68);
