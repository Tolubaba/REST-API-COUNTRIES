import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { useGlobalContext } from "../Context";

const Searchform = () => {
  const { searchvalue, searchterm, countries, setsearchterm ,setcountries,selectedregion,setselectedregion} =
    useGlobalContext();
    // const regions=['Africa','America','Asia','Europe','Oceania']

    const regions = [
      {
        name: "Filter by region",
        desc: "All",
      },
      {
        name: "Africa",
        desc: "Africa",
      },
      {
        name: "Americas",
        desc: "Americas",
      },
      {
        name: "Asia",
        desc: "Asia",
      },
      {
        name: "Europe",
        desc: "Europe",
      },
      {
        name: "Oceania",
        desc: "Oceania",
      },
    ]

  

const handlechange=(e)=>{
  setselectedregion(e.target.value)
  console.log(selectedregion)
  

}


    const searchcountry = () => {
    setsearchterm(searchvalue.current.value);
    
  };

  const handlesubmit = (e) => {
    e.preventDefault();
  };

/*
  const filterRegions = async (selectedregion) => {
    
    try{
      const response= selectedregion===null? await fetch(`https://restcountries.com/v3.1/region/${selectedregion}`): await fetch('https://restcountries.com/v2/all');
      const data=response.json()
      console.log(data)
      setcountries(data)
      
    }

    catch(error){
console.log(error)
    }
    

    
  
  }
  */



  return (
    <section className="section-search">
      <form className="search-form" onSubmit={handlesubmit}>
        <div className="form-control">
          <FaSearch className="search-icon" />
          <input
            ref={searchvalue}
            placeholder="search for your country"
            on
            onChange={searchcountry}
          />
        </div>
      </form>
      <div>
        
      </div>
      <select value={selectedregion} onChange={handlechange} className='select'>
    
        {regions.map((option,index)=>{
          const {name,desc}=option;
return(
          <option key={index} value={desc}>
            {name}

          </option>
)
        })}


      </select>
    </section>
  );
};

export default Searchform;
