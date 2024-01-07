import { createContext, useContext, useState } from "react";
import { content } from "public/assets/contentJson";
const ThemeContext = createContext({});

export const ThemeContextProvider = ({ children }) => {
  const defaultTabValue = content?.industry?.tabs?.tabs_content[0].value;

  const [color, setColor] = useState("red");
  const [activeTab, setActiveTab] = useState(defaultTabValue);

  return (
    <ThemeContext.Provider value={{ color, setColor, activeTab, setActiveTab }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
