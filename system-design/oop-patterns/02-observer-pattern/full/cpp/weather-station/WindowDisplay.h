#pragma once

#include <iostream>
#include "IObserver.h"
#include "WeatherStation.h"

class WindowDisplay : public IObserver {
public:
    explicit WindowDisplay(WeatherStation* station) : station_(station) {}

    void update() override {
        std::cout << "Window: " << station_->getTemperature() << " degrees outside.\n";
    }

private:
    WeatherStation* station_;
};
