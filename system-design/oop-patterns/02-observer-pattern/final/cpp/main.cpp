// Observer Pattern - final
//
// WeatherStation keeps a list of observers and calls update() on each one
// the moment its temperature changes, instead of any display having to
// poll for changes. PhoneDisplay saves a reference to the station in its
// constructor so it can read the new value once it's been told about it.

#include <iostream>
#include <vector>
#include <algorithm>

class IObserver {
public:
    virtual ~IObserver() = default;
    virtual void update() = 0;
};

class IObservable {
public:
    virtual ~IObservable() = default;
    virtual void add(IObserver* observer) = 0;
    virtual void remove(IObserver* observer) = 0;
    virtual void notify() = 0;
};

class WeatherStation : public IObservable {
public:
    void add(IObserver* observer) override {
        observers_.push_back(observer);
    }

    void remove(IObserver* observer) override {
        observers_.erase(std::remove(observers_.begin(), observers_.end(), observer), observers_.end());
    }

    void notify() override {
        for (IObserver* observer : observers_) {
            observer->update();
        }
    }

    int getTemperature() const { return temperature_; }

    void setTemperature(int temperature) {
        temperature_ = temperature;
        notify();
    }

private:
    std::vector<IObserver*> observers_;
    int temperature_ = 0;
};

class PhoneDisplay : public IObserver {
public:
    explicit PhoneDisplay(WeatherStation* station) : station_(station) {}

    void update() override {
        std::cout << "Phone: it's now " << station_->getTemperature() << " degrees.\n";
    }

private:
    WeatherStation* station_;
};

class WindowDisplay : public IObserver {
public:
    explicit WindowDisplay(WeatherStation* station) : station_(station) {}

    void update() override {
        std::cout << "Window: " << station_->getTemperature() << " degrees outside.\n";
    }

private:
    WeatherStation* station_;
};

int main() {
    WeatherStation station;

    PhoneDisplay phone(&station);
    WindowDisplay window(&station);
    station.add(&phone);
    station.add(&window);

    station.setTemperature(72);
    station.setTemperature(68);

    return 0;
}
