#pragma once

#include <vector>
#include <algorithm>
#include "IObservable.h"
#include "IObserver.h"

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
