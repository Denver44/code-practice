#include <iostream>
#include <thread>
#include <vector>
#include "connectionpool/ConnectionPool.h"

int main() {
    const int threadCount = 8;
    std::vector<std::thread> threads;
    std::vector<ConnectionPool*> results(threadCount);

    for (int i = 0; i < threadCount; ++i) {
        threads.emplace_back([&results, i]() {
            results[i] = &ConnectionPool::getInstance();
        });
    }

    for (auto& t : threads) t.join();

    for (ConnectionPool* pool : results) {
        std::cout << pool << "\n";
    }

    return 0;
}
