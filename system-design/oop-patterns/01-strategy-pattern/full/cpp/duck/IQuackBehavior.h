#pragma once

class IQuackBehavior {
public:
    virtual ~IQuackBehavior() = default;
    virtual void quack() = 0;
};
