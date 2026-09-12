package theme;

public class DarkThemeFactory implements UIFactory {
    public Button createButton() { return new DarkButton(); }
    public Label createLabel() { return new DarkLabel(); }
}
