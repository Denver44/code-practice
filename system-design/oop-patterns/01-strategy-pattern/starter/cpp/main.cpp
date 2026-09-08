// Strategy Pattern - starter
//
// MountainDuck and CloudDuck are cousins, not parent/child, but they fly the
// exact same special way. Because inheritance only shares code downward, that
// flying code had to be copy-pasted into both classes below.
//
// Your task: refactor this so the shared flying code lives in exactly one
// place, using the strategy pattern (see the blog post for the walkthrough).
// Hardcoding an if/else inside Duck::fly() does not count - the point is that
// Duck should not need to change when a new flying style is added.

#include <iostream>

class Duck {
public:
    virtual ~Duck() = default;
    void quack() { std::cout << "Quack!\n"; }
    virtual void fly() { std::cout << "Flying...\n"; }
    virtual void display() = 0;
};

class WildDuck : public Duck {
public:
    void display() override { std::cout << "A wild duck.\n"; }
};

class RubberDuck : public Duck {
public:
    void fly() override { /* rubber ducks don't fly */ }
    void display() override { std::cout << "A rubber duck.\n"; }
};

class MountainDuck : public Duck {
public:
    void fly() override { std::cout << "Soaring on mountain winds...\n"; }
    void display() override { std::cout << "A mountain duck.\n"; }
};

class CloudDuck : public Duck {
public:
    void fly() override { std::cout << "Soaring on mountain winds...\n"; } // duplicated
    void display() override { std::cout << "A cloud duck.\n"; }
};

int main() {
    WildDuck wildDuck;
    RubberDuck rubberDuck;
    MountainDuck mountainDuck;
    CloudDuck cloudDuck;

    Duck* ducks[] = {&wildDuck, &rubberDuck, &mountainDuck, &cloudDuck};
    for (Duck* duck : ducks) {
        duck->display();
        duck->quack();
        duck->fly();
    }

    return 0;
}
