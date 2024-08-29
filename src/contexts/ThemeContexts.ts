import { createContext } from "react";

export interface ThemeItem {
    theme:{
        name: string,
        bgColor: string,
        fgColor: string
    }
}

export const ThemeContext = createContext<any | undefined>(undefined);