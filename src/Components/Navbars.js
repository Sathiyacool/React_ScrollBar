import React from 'react'
import '../Styles/Navbar.css'
import { HashLink as Link } from 'react-router-hash-link'

const Navbars = () => {
  return (
    

 <nav>
    <Link to='/' className='title'>SATHIYA</Link>
    <ul>
      <li>
         <Link to='#home'>Home</Link>
      </li>
      <li>
         <Link to='#carrer'>Carrer</Link>
      </li>
      <li>
         <Link to='#about'>About</Link>
      </li>
      <li>
         <Link to='#contact'>Contact</Link>
      </li>
    </ul>
  </nav>  

   
  )
}

export default Navbars