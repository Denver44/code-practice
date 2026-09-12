package theme;

public class LightThemeFactory implements UIFactory {
    public Button createButton() { return new LightButton(); }
    public Label createLabel() { return new LightLabel(); }
}
