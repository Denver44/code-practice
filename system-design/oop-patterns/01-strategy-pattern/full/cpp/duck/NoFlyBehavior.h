#pragma once

#include "IFlyBehavior.h"

class NoFlyBehavior : public IFlyBehavior {
public:
    void fly() override { /* stays on the ground */ }
};
