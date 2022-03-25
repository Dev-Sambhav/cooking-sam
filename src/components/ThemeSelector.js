import { useTheme } from "../hooks/useTheme";
import Icon from "../assets/mode_icon.svg";

// import styles
import "./ThemeSelector.css";

const themeColors = ["#58249c", "#249c6b", "#b70233"];

const ThemeSelector = () => {
  const { changeColor, changeMode, mode } = useTheme();
  const toggleMode = () => {
    changeMode(mode === "dark" ? "light" : "dark");
  };
  return (
    <div className="theme-selector">
      <div className="mode-toggle">
        <img
          src={Icon}
          alt="mode_icon"
          style={{ filter: mode === "dark" ? "invert(100%)" : "invert(20%)" }}
          onClick={toggleMode}
        />
      </div>
      <div className="theme-buttons">
        {themeColors.map((color) => (
          <div
            key={color}
            onClick={() => changeColor(color)}
            style={{ background: color }}
          />
        ))}
      </div>
    </div>
  );
};

export default ThemeSelector;
