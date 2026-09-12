#pragma once

#include "Button.h"

class LightButton : public Button {
public:
    std::string render() const override { return "[ Button: dark text on white ]"; }
};
