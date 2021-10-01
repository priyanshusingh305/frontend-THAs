import { Theme } from "pretty-format";
import { createContext } from "react";

export interface ThemecontextType {
    theme: boolean,
    setTheme: (theme: boolean) => void
}

const initialState :ThemecontextType= {
    theme: false,
    setTheme: (theme: boolean) => {}
}
const ThemeContext = createContext<ThemecontextType>(initialState);

export default ThemeContext;