import connectionpool.ConnectionPool;

public class Main {
    public static void main(String[] args) {
        ConnectionPool a = ConnectionPool.getInstance();
        ConnectionPool b = ConnectionPool.getInstance();

        System.out.println(a == b);
    }
}
