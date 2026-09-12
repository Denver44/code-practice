// Factory Method Pattern - starter
//
// The random-creation logic lives directly inside populateZoo. There's no
// way to swap in a different creation strategy (like a balanced one) without
// duplicating this whole function.
//
// Your task: extract the creation logic behind a shared AnimalFactory shape,
// with RandomAnimalFactory and a new BalancedAnimalFactory both implementing
// it (see the blog post for the walkthrough), so populateZoo never mentions
// Dog, Cat, or Duck by name.

#include <iostream>
#include <string>
#include <cstdlib>

class Animal {
public:
    virtual ~Animal() = default;
    virtual std::string name() const = 0;
};

class Dog : public Animal {
public:
    std::string name() const override { return "Dog"; }
};

class Cat : public Animal {
public:
    std::string name() const override { return "Cat"; }
};

class Duck : public Animal {
public:
    std::string name() const override { return "Duck"; }
};

void populateZoo(int count) {
    for (int i = 0; i < count; ++i) {
        int choice = std::rand() % 3;
        if (choice == 0) {
            std::cout << Dog().name() << "\n";
        } else if (choice == 1) {
            std::cout << Cat().name() << "\n";
        } else {
            std::cout << Duck().name() << "\n";
        }
    }
}

int main() {
    populateZoo(6);
    return 0;
}
