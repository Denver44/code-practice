#pragma once

#include "IQuackBehavior.h"

class NoQuackBehavior : public IQuackBehavior {
public:
    void quack() override { /* stays silent */ }
};
