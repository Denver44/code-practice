export class ConnectionPool {
  private static instance: ConnectionPool | null = null;

  private constructor() {}

  static getInstance(): ConnectionPool {
    if (ConnectionPool.instance === null) {
      ConnectionPool.instance = new ConnectionPool();
    }
    return ConnectionPool.instance;
  }
}
