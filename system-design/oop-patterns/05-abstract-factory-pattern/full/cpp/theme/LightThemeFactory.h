#pragma once

#include "UIFactory.h"
#include "LightButton.h"
#include "LightLabel.h"

class LightThemeFactory : public UIFactory {
public:
    std::unique_ptr<Button> createButton() override { return std::make_unique<LightButton>(); }
    std::unique_ptr<Label> createLabel() override { return std::make_unique<LightLabel>(); }
};
