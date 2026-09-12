package zoo;

public class BalancedAnimalFactory implements AnimalFactory {
    private int dogCount = 0;
    private int catCount = 0;
    private int duckCount = 0;

    public Animal createAnimal() {
        if (dogCount <= catCount && dogCount <= duckCount) {
            dogCount++;
            return new Dog();
        }
        if (catCount <= duckCount) {
            catCount++;
            return new Cat();
        }
        duckCount++;
        return new Duck();
    }
}
