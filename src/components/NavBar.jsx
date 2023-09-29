import React from 'react'
import "../styles/NavBar.css"
import Zj from "./Images/Zj.svg"

const NavBar = () => {
  return (
    <div className="navigation">
        <a href=""><img src={Zj} className='Zj'/></a>
        <ul className="nav-menuu">
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
        </ul>
        <ul className="nav-menuutwo">
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
        </ul>
        <ul className="nav-menuuthree">
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
        </ul>
        <ul className="nav-menuufour">
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
        </ul>
    </div>
  )
}

export default NavBar