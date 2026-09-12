// Singleton Pattern - final
//
// The class-based getInstance() from the starter file works fine in TS,
// there's no race to fix. But TypeScript/JavaScript has an even simpler
// idiomatic answer: a module is only ever evaluated once and then cached,
// so exporting a single instance directly IS the singleton, no class,
// no getInstance() method, no private constructor needed at all.

class ConnectionPoolImpl {
  connect(): string {
    return 'connected';
  }
}

export const connectionPool = new ConnectionPoolImpl();

// Every import of this module, anywhere in the app, receives this exact
// same object, because the module itself only ever runs once.
console.log(connectionPool.connect());
