#pragma once

class Beverage {
public:
    virtual ~Beverage() = default;
    virtual int cost() const = 0;
};
