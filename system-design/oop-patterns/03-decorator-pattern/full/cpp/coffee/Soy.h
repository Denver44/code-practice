#pragma once

#include "AddOnDecorator.h"

class Soy : public AddOnDecorator {
public:
    explicit Soy(Beverage* beverage) : AddOnDecorator(beverage) {}

    int cost() const override {
        return beverage_->cost() + 1;
    }
};
