// Decorator Pattern - final
//
// AddOnDecorator both is a Beverage and has a Beverage. Each concrete
// decorator asks the beverage it wraps for its cost, then adds its own on
// top. Wrapping Espresso in Caramel, then wrapping that in Soy, stacks the
// costs without Beverage or Espresso ever needing to change.

#include <iostream>

class Beverage {
public:
    virtual ~Beverage() = default;
    virtual int cost() const = 0;
};

class Espresso : public Beverage {
public:
    int cost() const override { return 1; }
};

class AddOnDecorator : public Beverage {
public:
    explicit AddOnDecorator(Beverage* beverage) : beverage_(beverage) {}

protected:
    Beverage* beverage_;
};

class Caramel : public AddOnDecorator {
public:
    explicit Caramel(Beverage* beverage) : AddOnDecorator(beverage) {}

    int cost() const override {
        return beverage_->cost() + 2;
    }
};

class Soy : public AddOnDecorator {
public:
    explicit Soy(Beverage* beverage) : AddOnDecorator(beverage) {}

    int cost() const override {
        return beverage_->cost() + 1;
    }
};

int main() {
    Espresso espresso;
    Caramel caramel(&espresso);
    Soy soy(&caramel);

    std::cout << "Espresso: " << espresso.cost() << "\n";           // 1
    std::cout << "Espresso + Caramel: " << caramel.cost() << "\n";  // 3
    std::cout << "Espresso + Caramel + Soy: " << soy.cost() << "\n"; // 4

    return 0;
}
