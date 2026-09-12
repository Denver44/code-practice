// Singleton Pattern - starter
//
// This is the naive lazy singleton: check if the instance exists, and if
// not, create it. On a single thread that's fine. But several threads all
// call getInstance() at once here, right at startup, which is exactly the
// window where two threads can both see a null instance and both build
// their own.
//
// Your task: fix ConnectionPool so every thread gets back the exact same
// address, every single run (see the blog post for the walkthrough). Try
// running this several times first and see if you can catch a run where
// the printed addresses don't all match.

#include <iostream>
#include <thread>
#include <vector>

class ConnectionPool {
public:
    static ConnectionPool* getInstance() {
        if (instance_ == nullptr) {
            instance_ = new ConnectionPool();
        }
        return instance_;
    }

private:
    ConnectionPool() = default;
    static ConnectionPool* instance_;
};

ConnectionPool* ConnectionPool::instance_ = nullptr;

int main() {
    const int threadCount = 8;
    std::vector<std::thread> threads;
    std::vector<ConnectionPool*> results(threadCount);

    for (int i = 0; i < threadCount; ++i) {
        threads.emplace_back([&results, i]() {
            results[i] = ConnectionPool::getInstance();
        });
    }

    for (auto& t : threads) t.join();

    for (ConnectionPool* pool : results) {
        std::cout << pool << "\n";
    }

    return 0;
}
