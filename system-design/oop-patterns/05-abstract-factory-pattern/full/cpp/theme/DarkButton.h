#pragma once

#include "Button.h"

class DarkButton : public Button {
public:
    std::string render() const override { return "[ Button: white text on black ]"; }
};
