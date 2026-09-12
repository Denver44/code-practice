import weatherstation.WeatherStation;
import weatherstation.PhoneDisplay;
import weatherstation.WindowDisplay;

public class Main {
    public static void main(String[] args) {
        WeatherStation station = new WeatherStation();

        PhoneDisplay phone = new PhoneDisplay(station);
        WindowDisplay window = new WindowDisplay(station);
        station.add(phone);
        station.add(window);

        station.setTemperature(72);
        station.setTemperature(68);
    }
}
