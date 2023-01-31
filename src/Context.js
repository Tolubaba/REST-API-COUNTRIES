import React, { useState } from 'react'
import { useEffect } from 'react';
import { useContext } from 'react'
import { FaTemperatureHigh } from 'react-icons/fa';
const url ='https://restcountries.com/v2/all';

const AppContext=React.createContext();

const AppProvider = ({children}) => {
  const [loading,setloading]=useState(true);
  const [countries,setcountries]=useState( [])
  const [searchterm,setsearchterm]=useState('');

  useEffect(()=>{

  })
  
  const [selectedregion, setselectedregion]=useState('All')
  
  
const searchvalue=React.useRef('');




 
  const fetchdata = async ()=>{
    setloading(true)

    try{
      const response = selectedregion=='All'? await fetch(url):await fetch(`https://restcountries.com/v2/region/${selectedregion}`);
      const data=await response.json();
      console.log(data)
      setcountries(data)
      setloading(false)
    }

    catch(error){
      console.log(error)
    }
    
    
}

useEffect(()=>{
fetchdata()
},[selectedregion])









  return (
    <AppContext.Provider value={{loading,countries,searchvalue,searchterm,setsearchterm,selectedregion,setselectedregion}}>
      {children}


    </AppContext.Provider>
  );
};

export const useGlobalContext=()=>{
  return useContext(AppContext);
}



export { AppContext, AppProvider };
