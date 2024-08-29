import { ThemeContext } from "@contexts/ThemeContexts";
import React, { useContext } from "react";

export default function Controller() {
  const {theme,setLightTheme,setDarkTheme,toggleTheme} = useContext(ThemeContext);

  return (
    <div className="d-flex justify-content-center gap-2">
      <button className="btn btn-secondary" onClick={setLightTheme} disabled={theme.name==="light"}>light</button>
      <button className="btn btn-dark" onClick={setDarkTheme} disabled={theme.name==="dark"}>dark</button>
      <button className="btn btn-primary" onClick = {toggleTheme}>toggle theme</button>
    </div>
  );
}
