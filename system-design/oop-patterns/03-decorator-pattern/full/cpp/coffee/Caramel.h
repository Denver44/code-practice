#pragma once

#include "AddOnDecorator.h"

class Caramel : public AddOnDecorator {
public:
    explicit Caramel(Beverage* beverage) : AddOnDecorator(beverage) {}

    int cost() const override {
        return beverage_->cost() + 2;
    }
};
