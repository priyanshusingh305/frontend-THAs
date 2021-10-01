import { createContext } from "react";
interface ThemecontextType{
    theme:boolean,
    setTheme:()=>void
}

const initialState = {
    theme:false,
    setTheme:(theme :boolean)=> {

    }
}
const ThemeContext = createContext(initialState);