// Abstract Factory Pattern - starter
//
// createButton() and createLabel() are two separate, unrelated factory
// methods. Nothing stops you from accidentally pairing a light button with
// a dark label, since the two calls have no connection to each other.
//
// Your task: refactor this using the abstract factory pattern (see the blog
// post for the walkthrough) so a single UIFactory shape guarantees the
// button and label it builds always match.

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

class LightButton : public Button {
public:
    std::string render() const override { return "[ Button: dark text on white ]"; }
};

class DarkLabel : public Label {
public:
    std::string render() const override { return "Label: white text on black"; }
};

std::unique_ptr<Button> createButton() {
    return std::make_unique<LightButton>();
}

std::unique_ptr<Label> createLabel() {
    return std::make_unique<DarkLabel>();
}

int main() {
    auto button = createButton();
    auto label = createLabel();

    // Bug: a light button paired with a dark label, and nothing caught it.
    std::cout << button->render() << "\n";
    std::cout << label->render() << "\n";

    return 0;
}
