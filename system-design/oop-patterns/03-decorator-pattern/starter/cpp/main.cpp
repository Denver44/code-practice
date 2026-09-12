// Decorator Pattern - starter
//
// Every extra is a boolean flag on Beverage, and cost() has to know about
// every single one of them to compute a price. Adding a new extra means
// editing this class, and an extra that needs a count (like espresso shots)
// doesn't even fit as a boolean.
//
// Your task: refactor this using the decorator pattern (see the blog post
// for the walkthrough) so that adding a new extra never touches Beverage,
// Espresso, or any existing extra's code.

#include <iostream>

class Beverage {
public:
    bool hasCaramel = false;
    bool hasSoy = false;

    int cost() const {
        int total = baseCost();
        if (hasCaramel) total += 2;
        if (hasSoy) total += 1;
        return total;
    }

    virtual int baseCost() const = 0;
    virtual ~Beverage() = default;
};

class Espresso : public Beverage {
public:
    int baseCost() const override { return 1; }
};

int main() {
    Espresso espresso;
    espresso.hasCaramel = true;
    espresso.hasSoy = true;

    std::cout << "Cost: " << espresso.cost() << "\n"; // 4

    return 0;
}
