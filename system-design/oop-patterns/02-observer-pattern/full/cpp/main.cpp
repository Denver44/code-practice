#include "weather-station/WeatherStation.h"
#include "weather-station/PhoneDisplay.h"
#include "weather-station/WindowDisplay.h"

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
