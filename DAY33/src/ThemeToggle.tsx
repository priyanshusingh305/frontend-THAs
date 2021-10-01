import { useContext } from "react"
import{ThemecontextType} from "./ThemeContext"
import ThemeContext from "./ThemeContext"
const ThemeToggle=()=>{
    const {theme,setTheme}=useContext<ThemecontextType>(ThemeContext)
    return(
         <button onClick={()=>{
             setTheme(!theme)
         }}>
           {theme?"DARK":"LIGHT"}
         </button> 
        )
}
export default ThemeToggle