#pragma once

#include "Beverage.h"

class Espresso : public Beverage {
public:
    int cost() const override { return 1; }
};
