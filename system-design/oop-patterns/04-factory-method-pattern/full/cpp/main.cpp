#include <iostream>
#include "zoo/AnimalFactory.h"
#include "zoo/RandomAnimalFactory.h"
#include "zoo/BalancedAnimalFactory.h"

void populateZoo(AnimalFactory& factory, int count) {
    for (int i = 0; i < count; ++i) {
        auto animal = factory.createAnimal();
        std::cout << animal->name() << "\n";
    }
}

int main() {
    std::cout << "Random:\n";
    RandomAnimalFactory randomFactory;
    populateZoo(randomFactory, 6);

    std::cout << "Balanced:\n";
    BalancedAnimalFactory balancedFactory;
    populateZoo(balancedFactory, 6);

    return 0;
}
