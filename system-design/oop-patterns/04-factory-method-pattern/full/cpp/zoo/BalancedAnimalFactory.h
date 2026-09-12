#pragma once

#include "AnimalFactory.h"
#include "Dog.h"
#include "Cat.h"
#include "Duck.h"

class BalancedAnimalFactory : public AnimalFactory {
public:
    std::unique_ptr<Animal> createAnimal() override {
        if (dogCount_ <= catCount_ && dogCount_ <= duckCount_) {
            dogCount_++;
            return std::make_unique<Dog>();
        }
        if (catCount_ <= duckCount_) {
            catCount_++;
            return std::make_unique<Cat>();
        }
        duckCount_++;
        return std::make_unique<Duck>();
    }

private:
    int dogCount_ = 0;
    int catCount_ = 0;
    int duckCount_ = 0;
};
