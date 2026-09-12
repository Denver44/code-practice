#pragma once

#include <string>

class Label {
public:
    virtual ~Label() = default;
    virtual std::string render() const = 0;
};
