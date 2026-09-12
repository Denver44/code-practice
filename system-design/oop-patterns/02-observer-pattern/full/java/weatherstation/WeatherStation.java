package weatherstation;

import java.util.ArrayList;
import java.util.List;

public class WeatherStation implements IObservable {
    private final List<IObserver> observers = new ArrayList<>();
    private int temperature = 0;

    public void add(IObserver observer) {
        observers.add(observer);
    }

    public void remove(IObserver observer) {
        observers.remove(observer);
    }

    public void notifyObservers() {
        for (IObserver observer : observers) {
            observer.update();
        }
    }

    public int getTemperature() {
        return temperature;
    }

    public void setTemperature(int temperature) {
        this.temperature = temperature;
        notifyObservers();
    }
}
