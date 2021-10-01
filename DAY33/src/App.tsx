import React,{useState,useEffect,useContext} from 'react';
import ThemeContext from './ThemeContext'
import './App.css';
import ThemeToggle from './ThemeToggle'
interface AppProps{
  title: string;
}
const App=({title}:AppProps)=> {
  const[counter, setCounter]= useState<number|null>(null);
  const[theme,setTheme]=useState<boolean>(false)
  useEffect(()=>{
    setCounter(0)
  },[])
  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
    <div className="App">
      {counter!== null?(
      <button onClick={()=>{
        setCounter(counter+1)
      }}>{counter}</button>
      ):null}
    <ThemeToggle/>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
