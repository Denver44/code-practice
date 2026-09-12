package coffee;

public class Soy extends AddOnDecorator {
    public Soy(Beverage beverage) {
        super(beverage);
    }

    public int cost() {
        return beverage.cost() + 1;
    }
}
