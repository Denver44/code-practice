package zoo;

public class RandomAnimalFactory implements AnimalFactory {
    public Animal createAnimal() {
        int choice = new java.util.Random().nextInt(3);
        if (choice == 0) return new Dog();
        if (choice == 1) return new Cat();
        return new Duck();
    }
}
