package weatherstation;

public class PhoneDisplay implements IObserver {
    private final WeatherStation station;

    public PhoneDisplay(WeatherStation station) {
        this.station = station;
    }

    public void update() {
        System.out.println("Phone: it's now " + station.getTemperature() + " degrees.");
    }
}
