import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/global.css'
import Footer from '../components/Footer'
import picContact from '../images/picContact.jpg'
import '../styles/pages/contactpage.css'

export default function Contact() {
    return (
        <div id="contactpage">

            <Navbar />
            <h1>Contato</h1>

         

                    <div className="content-box">
                     
                        <div className="pic">
                        <img src={picContact} alt="Foto contato" />
                        <div className="informations">
                        <h3>Para mais informações ou dúvidas sobre o projeto</h3>
                        <h4>Email:</h4><p>lalanunnes@gmail.com</p>
                        <h4>Telefone:</h4><p>(11) 94939-9308</p>
                        <h4>Linkedin:</h4><a href="https://www.linkedin.com/in/larissa-nunes-331900168/">Larissa Nunes</a>
                        </div> 
                        </div>                                              
                    </div>
              







            <Footer />
        </div>
    )
}