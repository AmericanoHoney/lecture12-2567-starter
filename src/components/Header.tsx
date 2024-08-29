import { ThemeContext, ThemeItem } from "@contexts/ThemeContexts";
import { useContext } from "react";

export const Header = () => {
  const { theme } = useContext(ThemeContext);//consume ThemeContext
  return (
    <p className="display-3 text-center fst-italic"
      style={{color:theme.fgColor}}>
      A simple useContext example
    </p>
  );
};
