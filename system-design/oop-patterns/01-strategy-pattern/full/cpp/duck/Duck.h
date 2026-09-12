#pragma once

#include <memory>
#include "IFlyBehavior.h"
#include "IQuackBehavior.h"

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
