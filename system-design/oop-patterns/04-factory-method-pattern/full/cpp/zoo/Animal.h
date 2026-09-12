#pragma once

#include <string>

class Animal {
public:
    virtual ~Animal() = default;
    virtual std::string name() const = 0;
};
