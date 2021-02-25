import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/global.css'
import picAbout from '../images/about.jpg'
import '../styles/pages/aboutpage.css'


export default function About() {
    return (
        <div id="aboutpage">
            <Navbar />
        
            <h1>Sobre mim</h1>

            <main>
                
                <div className="aboutpic">
                <img src={picAbout} alt="Imagem cachorro pagina sobre" />
                </div>
                    <div className="box-model">
                    
                    <p>Olá, eu me chamo Larissa. Resolvi fazer esse projeto para praticar um poucos de React e Node,
                    e para deixar mais divertido resolvi desenvolver com o tema que eu amo muito, os animais. O projeto
                    não tem nenhuma funcionalidade inovadora, foi feito apenas para praticar.</p>
                    </div>
                  
            </main>
              
         <Footer />  
        </div> 
       
    )
}