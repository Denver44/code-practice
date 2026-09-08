// Strategy Pattern - final
//
// Flying and quacking are pulled out into their own interfaces. A Duck no
// longer writes any flying or quacking code itself, it just holds a box for
// each and asks that box to do the work. There is no MountainDuck class or
// CloudDuck class anymore, just different combinations of the same boxes.

#include <iostream>
#include <memory>

class IFlyBehavior {
public:
    virtual ~IFlyBehavior() = default;
    virtual void fly() = 0;
};

class IQuackBehavior {
public:
    virtual ~IQuackBehavior() = default;
    virtual void quack() = 0;
};

class SimpleFlyBehavior : public IFlyBehavior {
public:
    void fly() override { std::cout << "Flapping and flying.\n"; }
};

class JetFlyBehavior : public IFlyBehavior {
public:
    void fly() override { std::cout << "Soaring on mountain winds.\n"; }
};

class NoFlyBehavior : public IFlyBehavior {
public:
    void fly() override { /* stays on the ground */ }
};

class SimpleQuackBehavior : public IQuackBehavior {
public:
    void quack() override { std::cout << "Quack!\n"; }
};

class NoQuackBehavior : public IQuackBehavior {
public:
    void quack() override { /* stays silent */ }
};

class Duck {
public:
    Duck(std::unique_ptr<IFlyBehavior> flyBehavior,
         std::unique_ptr<IQuackBehavior> quackBehavior)
        : flyBehavior_(std::move(flyBehavior)),
          quackBehavior_(std::move(quackBehavior)) {}

    void performFly() { flyBehavior_->fly(); }
    void performQuack() { quackBehavior_->quack(); }

private:
    std::unique_ptr<IFlyBehavior> flyBehavior_;
    std::unique_ptr<IQuackBehavior> quackBehavior_;
};

int main() {
    Duck wildDuck(std::make_unique<SimpleFlyBehavior>(), std::make_unique<SimpleQuackBehavior>());
    Duck rubberDuck(std::make_unique<NoFlyBehavior>(), std::make_unique<NoQuackBehavior>());
    Duck mountainDuck(std::make_unique<JetFlyBehavior>(), std::make_unique<SimpleQuackBehavior>());
    Duck cloudDuck(std::make_unique<JetFlyBehavior>(), std::make_unique<NoQuackBehavior>());

    for (Duck* duck : {&wildDuck, &rubberDuck, &mountainDuck, &cloudDuck}) {
        duck->performQuack();
        duck->performFly();
    }

    return 0;
}
