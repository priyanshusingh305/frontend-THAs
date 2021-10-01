import React,{useState,useEffect} from 'react';
import './App.css';
interface AppProps{
  title: string;
}
const App=({title}:AppProps)=> {
  const[counter, setCounter]= useState<number|null>(null);
  useEffect(()=>{
    setCounter(0)
  },[])
  return (
    <div className="App">
      {counter!== null?(
      <button onClick={()=>{
        setCounter(counter+1)
      }}>{counter}</button>
      ):null}
    </div>
  );
}

export default App;
