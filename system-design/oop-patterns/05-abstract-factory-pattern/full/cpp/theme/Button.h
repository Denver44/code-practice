#pragma once

#include <string>

class Button {
public:
    virtual ~Button() = default;
    virtual std::string render() const = 0;
};
