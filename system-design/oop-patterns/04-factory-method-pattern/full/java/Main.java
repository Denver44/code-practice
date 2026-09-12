import zoo.AnimalFactory;
import zoo.RandomAnimalFactory;
import zoo.BalancedAnimalFactory;

public class Main {
    static void populateZoo(AnimalFactory factory, int count) {
        for (int i = 0; i < count; i++) {
            System.out.println(factory.createAnimal().name());
        }
    }

    public static void main(String[] args) {
        System.out.println("Random:");
        populateZoo(new RandomAnimalFactory(), 6);

        System.out.println("Balanced:");
        populateZoo(new BalancedAnimalFactory(), 6);
    }
}
