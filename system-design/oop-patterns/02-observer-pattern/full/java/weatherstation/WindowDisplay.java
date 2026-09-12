package weatherstation;

public class WindowDisplay implements IObserver {
    private final WeatherStation station;

    public WindowDisplay(WeatherStation station) {
        this.station = station;
    }

    public void update() {
        System.out.println("Window: " + station.getTemperature() + " degrees outside.");
    }
}
