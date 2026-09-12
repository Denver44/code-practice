#pragma once

#include <iostream>
#include "IObserver.h"
#include "WeatherStation.h"

class PhoneDisplay : public IObserver {
public:
    explicit PhoneDisplay(WeatherStation* station) : station_(station) {}

    void update() override {
        std::cout << "Phone: it's now " << station_->getTemperature() << " degrees.\n";
    }

private:
    WeatherStation* station_;
};
