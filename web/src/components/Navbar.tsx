import React, {useState} from 'react'
import Logo from '../images/animal-care.png'

import '../styles/components/navbarpages.css'

function Navbar(){

    const [open, setOpen] = useState(false)

    return(
        <div>
            <nav>
            <div className="logo">
                <img src={Logo} alt="Logo" />
            </div>
                 <ul className="navbar-links" style={{transform: open ? "translateX(0px)" : ""}}>
                     <li><a href="/">Inicio</a></li>
                     <li><a href="/About">Sobre</a></li>
                     <li><a href="/Contact">Contato</a></li>
                 </ul>
                 <i onClick={() => setOpen(!open)}className="fas fa-bars burguer"></i>
            </nav>
        </div>         
    )
}

export default Navbar;