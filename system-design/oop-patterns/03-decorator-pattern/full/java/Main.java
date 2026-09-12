import coffee.Espresso;
import coffee.Caramel;
import coffee.Soy;

public class Main {
    public static void main(String[] args) {
        Espresso espresso = new Espresso();
        Caramel caramel = new Caramel(espresso);
        Soy soy = new Soy(caramel);

        System.out.println("Espresso: " + espresso.cost());
        System.out.println("Espresso + Caramel: " + caramel.cost());
        System.out.println("Espresso + Caramel + Soy: " + soy.cost());
    }
}
