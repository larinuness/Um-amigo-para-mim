import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/global.css'
import picAbout from '../images/Anna.jpg'
import '../styles/pages/aboutpage.css'


export default function About() {
    return (
        <div id="aboutpage">
            <Navbar />

            <h1>Sobre mim</h1>
       
            <div className="content-box">
                     
                        <div className="pic">
                        <img src={picAbout} alt="Foto sobre" />
                        <div className="informations">
                        <p>Olá, eu me chamo Larissa. Resolvi fazer esse projeto para praticar um poucos de React e Node,
                        e para deixar mais divertido resolvi desenvolver com o tema que eu amo muito, os animais. O projeto
                        não tem nenhuma funcionalidade inovadora, foi feito apenas para praticar.</p>
                        </div> 
                        </div>                                              
            </div>

            

                
               
       
            <Footer />
        </div>

    )
}