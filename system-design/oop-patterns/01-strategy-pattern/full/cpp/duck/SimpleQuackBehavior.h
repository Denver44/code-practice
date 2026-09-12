#pragma once

#include <iostream>
#include "IQuackBehavior.h"

class SimpleQuackBehavior : public IQuackBehavior {
public:
    void quack() override { std::cout << "Quack!\n"; }
};
