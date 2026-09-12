#pragma once

#include "Animal.h"

class Dog : public Animal {
public:
    std::string name() const override { return "Dog"; }
};
