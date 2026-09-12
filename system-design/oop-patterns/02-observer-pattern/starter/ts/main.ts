// Observer Pattern - starter
//
// PhoneDisplay has no way to know when WeatherStation's temperature
// changes, so it just asks over and over (polling). Most of those checks
// find nothing new, and every display added multiplies the wasted checks.
//
// Your task: refactor this so WeatherStation tells its displays the moment
// its temperature changes, using the observer pattern (see the blog post
// for the walkthrough). No polling loop should remain when you're done.

class WeatherStation {
  private temperature = 70;

  getTemperature(): number {
    return this.temperature;
  }

  setTemperature(temperature: number): void {
    this.temperature = temperature;
  }
}

class PhoneDisplay {
  private lastSeen = -1;

  constructor(private station: WeatherStation) {}

  poll(): void {
    const current = this.station.getTemperature();
    if (current !== this.lastSeen) {
      console.log(`Phone: it's now ${current} degrees.`);
      this.lastSeen = current;
    } else {
      console.log('Phone: still nothing new...');
    }
  }
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function main() {
  const station = new WeatherStation();
  const phone = new PhoneDisplay(station);

  // Poll a handful of times. Most of these checks find no change at all.
  for (let i = 0; i < 5; i++) {
    phone.poll();
    await sleep(100);
  }

  station.setTemperature(72);
  phone.poll(); // only now does the phone happen to catch the change
}

main();
