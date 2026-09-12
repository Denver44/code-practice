#pragma once

#include "Animal.h"

class Duck : public Animal {
public:
    std::string name() const override { return "Duck"; }
};
