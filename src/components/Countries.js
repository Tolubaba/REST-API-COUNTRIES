import React from 'react'
import {Link} from 'react-router-dom'

const Countries = ({flags,name,population,region,capital}) => {
  return (

    <Link to={`/singlecountry/${name}`}> 
    
    
    <div className='countries'>
        <div className='divflag '>
          
            <img className='flag' src={flags.png}/>
        </div>
        <div className='countriesword'>

        <h3>{name}</h3>
        <p> Population: {population}</p>
        <p>Region: {region}</p>
        <p>capital: {capital}</p>
        
        </div>
      
    </div>

    </Link>
  )
}

export default Countries
