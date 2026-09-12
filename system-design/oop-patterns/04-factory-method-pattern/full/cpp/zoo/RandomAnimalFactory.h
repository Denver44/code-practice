#pragma once

#include <cstdlib>
#include "AnimalFactory.h"
#include "Dog.h"
#include "Cat.h"
#include "Duck.h"

class RandomAnimalFactory : public AnimalFactory {
public:
    std::unique_ptr<Animal> createAnimal() override {
        int choice = std::rand() % 3;
        if (choice == 0) return std::make_unique<Dog>();
        if (choice == 1) return std::make_unique<Cat>();
        return std::make_unique<Duck>();
    }
};
