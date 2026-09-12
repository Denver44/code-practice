import theme.UIFactory;
import theme.LightThemeFactory;
import theme.DarkThemeFactory;

public class Main {
    static void renderScreen(UIFactory factory) {
        System.out.println(factory.createButton().render());
        System.out.println(factory.createLabel().render());
    }

    public static void main(String[] args) {
        System.out.println("Light theme:");
        renderScreen(new LightThemeFactory());

        System.out.println("Dark theme:");
        renderScreen(new DarkThemeFactory());
    }
}
