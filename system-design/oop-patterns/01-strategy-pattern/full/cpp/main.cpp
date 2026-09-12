#include <memory>
#include "duck/Duck.h"
#include "duck/SimpleFlyBehavior.h"
#include "duck/JetFlyBehavior.h"
#include "duck/NoFlyBehavior.h"
#include "duck/SimpleQuackBehavior.h"
#include "duck/NoQuackBehavior.h"

int main() {
    Duck wildDuck(
        std::make_unique<SimpleFlyBehavior>(),
        std::make_unique<SimpleQuackBehavior>()
    );

    Duck rubberDuck(
        std::make_unique<NoFlyBehavior>(),
        std::make_unique<NoQuackBehavior>()
    );

    Duck mountainDuck(
        std::make_unique<JetFlyBehavior>(),
        std::make_unique<SimpleQuackBehavior>()
    );

    wildDuck.performQuack();
    wildDuck.performFly();

    rubberDuck.performQuack();
    rubberDuck.performFly();

    mountainDuck.performQuack();
    mountainDuck.performFly();

    return 0;
}
