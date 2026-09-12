#pragma once

#include "Label.h"

class DarkLabel : public Label {
public:
    std::string render() const override { return "Label: white text on black"; }
};
