#pragma once

#include "Label.h"

class LightLabel : public Label {
public:
    std::string render() const override { return "Label: dark text on white"; }
};
