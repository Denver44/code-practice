#pragma once

#include <iostream>
#include "IFlyBehavior.h"

class SimpleFlyBehavior : public IFlyBehavior {
public:
    void fly() override { std::cout << "Flapping and flying.\n"; }
};
