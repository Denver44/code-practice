import { WeatherStation } from './weather-station/WeatherStation';
import { PhoneDisplay } from './weather-station/PhoneDisplay';
import { WindowDisplay } from './weather-station/WindowDisplay';

const station = new WeatherStation();

const phone = new PhoneDisplay(station);
const window_ = new WindowDisplay(station);
station.add(phone);
station.add(window_);

station.setTemperature(72);
station.setTemperature(68);
