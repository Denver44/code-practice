export class ConnectionPool {
  static #instance = null;

  constructor() {
    if (ConnectionPool.#instance) {
      throw new Error('Use ConnectionPool.getInstance(), not new ConnectionPool()');
    }
  }

  static getInstance() {
    if (ConnectionPool.#instance === null) {
      ConnectionPool.#instance = new ConnectionPool();
    }
    return ConnectionPool.#instance;
  }
}
