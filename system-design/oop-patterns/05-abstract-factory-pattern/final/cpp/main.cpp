// Abstract Factory Pattern - final
//
// UIFactory has one method per related product. LightThemeFactory and
// DarkThemeFactory each build their own matching set, so renderScreen can
// never end up with a mismatched button/label pair.

#include <iostream>
#include <string>
#include <memory>

class Button {
public:
    virtual ~Button() = default;
    virtual std::string render() const = 0;
};

class Label {
public:
    virtual ~Label() = default;
    virtual std::string render() const = 0;
};

class UIFactory {
public:
    virtual ~UIFactory() = default;
    virtual std::unique_ptr<Button> createButton() = 0;
    virtual std::unique_ptr<Label> createLabel() = 0;
};

class LightButton : public Button {
public:
    std::string render() const override { return "[ Button: dark text on white ]"; }
};

class DarkButton : public Button {
public:
    std::string render() const override { return "[ Button: white text on black ]"; }
};

class LightLabel : public Label {
public:
    std::string render() const override { return "Label: dark text on white"; }
};

class DarkLabel : public Label {
public:
    std::string render() const override { return "Label: white text on black"; }
};

class LightThemeFactory : public UIFactory {
public:
    std::unique_ptr<Button> createButton() override { return std::make_unique<LightButton>(); }
    std::unique_ptr<Label> createLabel() override { return std::make_unique<LightLabel>(); }
};

class DarkThemeFactory : public UIFactory {
public:
    std::unique_ptr<Button> createButton() override { return std::make_unique<DarkButton>(); }
    std::unique_ptr<Label> createLabel() override { return std::make_unique<DarkLabel>(); }
};

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
