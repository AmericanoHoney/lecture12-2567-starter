import { ThemeContext } from "@contexts/ThemeContexts";
import { useContext } from "react";

export const Detail = () => {
  const { theme } = useContext(ThemeContext);

  return <p className="text-center"
            style={{color: theme.fgColor}}>
              {theme.name} is activated</p>;
};
