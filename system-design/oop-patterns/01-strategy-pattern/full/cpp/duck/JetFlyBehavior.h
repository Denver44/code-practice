#pragma once

#include <iostream>
#include "IFlyBehavior.h"

class JetFlyBehavior : public IFlyBehavior {
public:
    void fly() override { std::cout << "Soaring on mountain winds.\n"; }
};
