#pragma once

#include "Animal.h"

class Cat : public Animal {
public:
    std::string name() const override { return "Cat"; }
};
