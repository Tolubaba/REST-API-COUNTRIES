import React, { useState } from "react"; 
import { useEffect } from "react";
import Navbar from "./Navbar";
import Main from "./Main";
import Singlecountry from "./components/Singlecountry";
import {BrowserRouter, Route,Routes,Link} from 'react-router-dom'
 const getStorageTheme=()=>{

  let theme ='darktheme';
  if(localStorage.getItem('theme')){
    theme=localStorage.getItem('theme')
  }
  return theme
 }
function App() {
  const [theme,settheme]=useState(getStorageTheme());

  const toggleTheme=()=>{
console.log(theme)
    if(theme==='darktheme'){
      settheme('lighttheme')
    }

    else{
      settheme('darktheme')
    }
  }

  useEffect(()=>{

    document.documentElement.className=theme;
    localStorage.setItem('theme',theme)
  },[theme])


  



  return (
    <div className="App"> 


      <Navbar theme={theme} toggleTheme={toggleTheme}/>

      <Routes>


        <Route path="/" element={<Main/>}/>
        <Route path="/singlecountry/:name" element={<Singlecountry/>}/>

      </Routes>
      
      
      </div>
  );
}

export default App;
