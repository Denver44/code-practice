import duck.Duck;
import duck.SimpleFlyBehavior;
import duck.JetFlyBehavior;
import duck.NoFlyBehavior;
import duck.SimpleQuackBehavior;
import duck.NoQuackBehavior;

public class Main {
    public static void main(String[] args) {
        Duck wildDuck = new Duck(new SimpleFlyBehavior(), new SimpleQuackBehavior());
        Duck rubberDuck = new Duck(new NoFlyBehavior(), new NoQuackBehavior());
        Duck mountainDuck = new Duck(new JetFlyBehavior(), new SimpleQuackBehavior());

        wildDuck.performQuack();
        wildDuck.performFly();

        rubberDuck.performQuack();
        rubberDuck.performFly();

        mountainDuck.performQuack();
        mountainDuck.performFly();
    }
}
