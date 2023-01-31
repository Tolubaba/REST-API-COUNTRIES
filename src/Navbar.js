import React from 'react'
import { FaMoon } from 'react-icons/fa';
import { useState } from 'react';
import { useEffect } from 'react';




const Navbar = ({theme,toggleTheme}) => {

  return (
    <header>
        <nav className='nav' >
          <h2> Where in the  world ?</h2>
          <div className='toggle'onClick={toggleTheme}>
            <FaMoon className='moon'/>
            <p> {theme==='darktheme'?'Dark mode':'Light mode'}</p>
          </div>
        

        </nav>
    </header>
  )
}

export default Navbar
