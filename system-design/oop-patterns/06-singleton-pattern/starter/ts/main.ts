// Singleton Pattern - starter
//
// This is the exact same lazy check-then-create shape as the C++ version
// in the same lab. In C++, this has a real race between threads. In
// TypeScript, it never does: JavaScript runs on a single thread, so two
// calls to getInstance() are never literally executing at the same instant.
// There's nothing to fix here, this file exists for comparison with the
// C++ starter/final in this same lab.

class ConnectionPool {
  private static instance: ConnectionPool | null = null;

  private constructor() {}

  static getInstance(): ConnectionPool {
    if (ConnectionPool.instance === null) {
      ConnectionPool.instance = new ConnectionPool();
    }
    return ConnectionPool.instance;
  }
}

const a = ConnectionPool.getInstance();
const b = ConnectionPool.getInstance();

console.log(a === b); // always true
