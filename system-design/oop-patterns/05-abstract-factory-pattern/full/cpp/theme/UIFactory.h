#pragma once

#include <memory>
#include "Button.h"
#include "Label.h"

class UIFactory {
public:
    virtual ~UIFactory() = default;
    virtual std::unique_ptr<Button> createButton() = 0;
    virtual std::unique_ptr<Label> createLabel() = 0;
};
