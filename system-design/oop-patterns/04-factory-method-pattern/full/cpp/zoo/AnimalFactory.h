#pragma once

#include <memory>
#include "Animal.h"

class AnimalFactory {
public:
    virtual ~AnimalFactory() = default;
    virtual std::unique_ptr<Animal> createAnimal() = 0;
};
