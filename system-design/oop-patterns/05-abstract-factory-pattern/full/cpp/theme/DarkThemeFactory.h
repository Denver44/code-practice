#pragma once

#include "UIFactory.h"
#include "DarkButton.h"
#include "DarkLabel.h"

class DarkThemeFactory : public UIFactory {
public:
    std::unique_ptr<Button> createButton() override { return std::make_unique<DarkButton>(); }
    std::unique_ptr<Label> createLabel() override { return std::make_unique<DarkLabel>(); }
};
