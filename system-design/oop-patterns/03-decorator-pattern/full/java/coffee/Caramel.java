package coffee;

public class Caramel extends AddOnDecorator {
    public Caramel(Beverage beverage) {
        super(beverage);
    }

    public int cost() {
        return beverage.cost() + 2;
    }
}
