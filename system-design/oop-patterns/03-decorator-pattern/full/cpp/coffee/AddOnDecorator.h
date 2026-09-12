#pragma once

#include "Beverage.h"

class AddOnDecorator : public Beverage {
public:
    explicit AddOnDecorator(Beverage* beverage) : beverage_(beverage) {}

protected:
    Beverage* beverage_;
};
