import React from "react";
import { useState } from "react";
import Countries from "./Countries";
import Loading from "./Loading";
import { useGlobalContext } from "../Context";

const CountriesList = () => {
  const { loading, countries, searchcountry, searchterm } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }
  return (
    <section className="section">
      {countries
        .filter((item) => {
          if (searchterm == "") {
            return item;
          }
         
          
          
          else if (
            item.name.toLowerCase().includes(searchterm.toLowerCase())
          ) {
            return item;
          }

          
        })
        .map((item, index) => {
          return <Countries key={index} {...item} />;
        })}
        

        {countries.length < 1 ? null : (
        <h2 style={{color:'white'}}>No items matched the filter.</h2>
      )}
 
        
    </section>
  );
};

export default CountriesList;
