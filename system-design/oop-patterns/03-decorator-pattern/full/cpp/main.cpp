#include <iostream>
#include "coffee/Espresso.h"
#include "coffee/Caramel.h"
#include "coffee/Soy.h"

int main() {
    Espresso espresso;
    Caramel caramel(&espresso);
    Soy soy(&caramel);

    std::cout << "Espresso: " << espresso.cost() << "\n";
    std::cout << "Espresso + Caramel: " << caramel.cost() << "\n";
    std::cout << "Espresso + Caramel + Soy: " << soy.cost() << "\n";

    return 0;
}
