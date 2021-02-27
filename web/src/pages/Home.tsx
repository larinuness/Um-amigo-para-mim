import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/global.css'
import { FiPlus } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import '../styles/pages/homepage.css'
import Jade from '../images/Jade.jpg'
import Josh from '../images/Josh.jpg'
import Leo from '../images/Leo.jpg'
import Maia from '../images/Maia.jpg'


export default function Home() {
    return (
        <div id="homepage">
            <Navbar />
            <h1>Um amigo para mim</h1>

            <div className="container">
                    
                    <div className="content-box">
                     
                     <div className="pic">
                     <img src={Jade} alt="Foto contato" />
                     <div className="informations">
                     <h1>Jade</h1>    
                     <p>Meu nome é Jade e sou demais de linda.
                        Já sou adulta, mas não vá ainda, me ouça, prometo contigo formar uma família.
                        Fui encontrada bem magra,
                        muito desidratada, caía e me levantava. Mas com ajuda de humanos 
                        maravilhosos consegui me recuperar, sou muito
                        carinhosa e dócil, adoro crianças.</p>
                   
                     </div> 
                     </div>                                              
                 </div>

                 <div className="content-box">
                     
                     <div className="pic">
                     <img src={Jade} alt="Foto contato" />
                     <div className="informations">
                     <h1>Jade</h1>    
                     <p>Meu nome é Jade e sou demais de linda.
                        Já sou adulta, mas não vá ainda, me ouça, prometo contigo formar uma família.
                        Fui encontrada bem magra,
                        muito desidratada, caía e me levantava. Mas com ajuda de humanos 
                        maravilhosos consegui me recuperar, sou muito
                        carinhosa e dócil, adoro crianças.</p>
                   
                     </div> 
                     </div>                                              
                 </div>

                 <div className="content-box">
                     
                     <div className="pic">
                     <img src={Jade} alt="Foto contato" />
                     <div className="informations">
                     <h1>Jade</h1>    
                     <p>Meu nome é Jade e sou demais de linda.
                        Já sou adulta, mas não vá ainda, me ouça, prometo contigo formar uma família.
                        Fui encontrada bem magra,
                        muito desidratada, caía e me levantava. Mas com ajuda de humanos 
                        maravilhosos consegui me recuperar, sou muito
                        carinhosa e dócil, adoro crianças.</p>
                   
                     </div> 
                     </div>                                              
                 </div>

                 <div className="content-box">
                     
                     <div className="pic">
                     <img src={Jade} alt="Foto contato" />
                     <div className="informations">
                     <h1>Jade</h1>    
                     <p>Meu nome é Jade e sou demais de linda.
                        Já sou adulta, mas não vá ainda, me ouça, prometo contigo formar uma família.
                        Fui encontrada bem magra,
                        muito desidratada, caía e me levantava. Mas com ajuda de humanos 
                        maravilhosos consegui me recuperar, sou muito
                        carinhosa e dócil, adoro crianças.</p>
                   
                     </div> 
                     </div>                                              
                 </div>

            </div>

            <Link to="/app" className="enter-app">
                <FiPlus size={25} color="white" />

            </Link>
            <Footer />
        </div>
    )
}