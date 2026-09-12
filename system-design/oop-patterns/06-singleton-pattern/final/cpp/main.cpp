// Singleton Pattern - final
//
// ConnectionPool now uses a function-local static, which C++11 guarantees
// is initialized exactly once, even under concurrent calls, with no manual
// lock needed. Every thread gets back the exact same address, every run.

#include <iostream>
#include <thread>
#include <vector>

class ConnectionPool {
public:
    static ConnectionPool& getInstance() {
        static ConnectionPool instance;
        return instance;
    }

private:
    ConnectionPool() = default;
};

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
