import * as React from "react";

interface ColorPalette {
  primary: string;
  secondary: string;
  tertiary: string;
  quaternary: string;
  quinary: string;
}

interface DesignStyle {
  name: string;
}

const getRandomColor = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};

const generateColorPalette = (): ColorPalette => {
  return {
    primary: getRandomColor(),
    secondary: getRandomColor(),
    tertiary: getRandomColor(),
    quaternary: getRandomColor(),
    quinary: getRandomColor(),
  };
};

const generateDesignStyle = (): DesignStyle => {
  const designStyles = [
    "Vintage",
    "Futuristic",
    "Minimalistic",
    "Bold",
    "Elegant",
    "Playful",
    "Retro",
    "Modern",
  ];
  const randomIndex = Math.floor(Math.random() * designStyles.length);
  const randomDesignStyle = designStyles[randomIndex];
  return {
    name: randomDesignStyle,
  };
};

const App: React.FC = () => {
  const [colorPalette, setColorPalette] = React.useState<ColorPalette>({
    primary: "",
    secondary: "",
    tertiary: "",
    quaternary: "",
    quinary: "",
  });

  const [designStyle, setDesignStyle] = React.useState<DesignStyle>({
    name: "",
  });

  const handleGenerateTheme = () => {
    const newColorPalette = generateColorPalette();
    const newDesignStyle = generateDesignStyle();
    setColorPalette(newColorPalette);
    setDesignStyle(newDesignStyle);
  };

  const handleSaveTheme = () => {
    // Logic to save the generated theme
    console.log("Theme saved!");
  };

  return (
    <div>
      <h1>Random Theme Generator Extension</h1>
      <button
        onClick={handleGenerateTheme}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          fontWeight: "bold",
          backgroundColor: "#3f51b5",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          marginBottom: "20px",
        }}>
        Generate Theme
      </button>
      <div>
        <h2>Color Palette</h2>
        <div style={{ display: "flex" }}>
          {Object.values(colorPalette).map((color, index) => (
            <div
              key={index}
              style={{
                backgroundColor: color,
                width: "100px",
                height: "100px",
                margin: "0 10px",
                border: "1px solid #ccc",
              }}
            />
          ))}
        </div>
      </div>
      <div>
        <h2>Design Style</h2>
        <p
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            textTransform: "uppercase",
          }}>
          {designStyle.name}
        </p>
      </div>
      <button
        onClick={handleSaveTheme}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          fontWeight: "bold",
          backgroundColor: "#4caf50",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          marginTop: "20px",
        }}>
        Save Theme
      </button>
    </div>
  );
};

export default App;
