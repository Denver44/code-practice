package connectionpool;

public class ConnectionPool {
    private ConnectionPool() {}

    private static class Holder {
        static final ConnectionPool INSTANCE = new ConnectionPool();
    }

    public static ConnectionPool getInstance() {
        return Holder.INSTANCE;
    }
}
