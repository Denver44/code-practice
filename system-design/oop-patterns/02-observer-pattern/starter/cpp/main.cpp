// Observer Pattern - starter
//
// PhoneDisplay has no way to know when WeatherStation's temperature
// changes, so it just asks over and over (polling). Most of those checks
// find nothing new, and every display added multiplies the wasted checks.
//
// Your task: refactor this so WeatherStation tells its displays the moment
// its temperature changes, using the observer pattern (see the blog post
// for the walkthrough). No polling loop should remain when you're done.

#include <iostream>
#include <thread>
#include <chrono>

class WeatherStation {
public:
    int getTemperature() const { return temperature_; }

    void setTemperature(int temperature) { temperature_ = temperature; }

private:
    int temperature_ = 70;
};

class PhoneDisplay {
public:
    explicit PhoneDisplay(WeatherStation* station) : station_(station) {}

    void poll() {
        int current = station_->getTemperature();
        if (current != lastSeen_) {
            std::cout << "Phone: it's now " << current << " degrees.\n";
            lastSeen_ = current;
        } else {
            std::cout << "Phone: still nothing new...\n";
        }
    }

private:
    WeatherStation* station_;
    int lastSeen_ = -1;
};

int main() {
    WeatherStation station;
    PhoneDisplay phone(&station);

    // Poll a handful of times. Most of these checks find no change at all.
    for (int i = 0; i < 5; ++i) {
        phone.poll();
        std::this_thread::sleep_for(std::chrono::milliseconds(100));
    }

    station.setTemperature(72);
    phone.poll(); // only now does the phone happen to catch the change

    return 0;
}
