// Factory Method Pattern - final
//
// RandomAnimalFactory and BalancedAnimalFactory both implement AnimalFactory,
// so populateZoo can accept either one without ever mentioning Dog, Cat,
// Duck, or either factory by name.

#include <iostream>
#include <string>
#include <memory>
#include <cstdlib>

class Animal {
public:
    virtual ~Animal() = default;
    virtual std::string name() const = 0;
};

class Dog : public Animal {
public:
    std::string name() const override { return "Dog"; }
};

class Cat : public Animal {
public:
    std::string name() const override { return "Cat"; }
};

class Duck : public Animal {
public:
    std::string name() const override { return "Duck"; }
};

class AnimalFactory {
public:
    virtual ~AnimalFactory() = default;
    virtual std::unique_ptr<Animal> createAnimal() = 0;
};

class RandomAnimalFactory : public AnimalFactory {
public:
    std::unique_ptr<Animal> createAnimal() override {
        int choice = std::rand() % 3;
        if (choice == 0) return std::make_unique<Dog>();
        if (choice == 1) return std::make_unique<Cat>();
        return std::make_unique<Duck>();
    }
};

class BalancedAnimalFactory : public AnimalFactory {
public:
    std::unique_ptr<Animal> createAnimal() override {
        if (dogCount_ <= catCount_ && dogCount_ <= duckCount_) {
            dogCount_++;
            return std::make_unique<Dog>();
        }
        if (catCount_ <= duckCount_) {
            catCount_++;
            return std::make_unique<Cat>();
        }
        duckCount_++;
        return std::make_unique<Duck>();
    }

private:
    int dogCount_ = 0;
    int catCount_ = 0;
    int duckCount_ = 0;
};

void populateZoo(AnimalFactory& factory, int count) {
    for (int i = 0; i < count; ++i) {
        auto animal = factory.createAnimal();
        std::cout << animal->name() << "\n";
    }
}

int main() {
    std::cout << "Random:\n";
    RandomAnimalFactory randomFactory;
    populateZoo(randomFactory, 6);

    std::cout << "Balanced:\n";
    BalancedAnimalFactory balancedFactory;
    populateZoo(balancedFactory, 6);

    return 0;
}
