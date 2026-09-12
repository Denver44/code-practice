#include <iostream>
#include "theme/UIFactory.h"
#include "theme/LightThemeFactory.h"
#include "theme/DarkThemeFactory.h"

void renderScreen(UIFactory& factory) {
    auto button = factory.createButton();
    auto label = factory.createLabel();
    std::cout << button->render() << "\n";
    std::cout << label->render() << "\n";
}

int main() {
    std::cout << "Light theme:\n";
    LightThemeFactory light;
    renderScreen(light);

    std::cout << "Dark theme:\n";
    DarkThemeFactory dark;
    renderScreen(dark);

    return 0;
}
