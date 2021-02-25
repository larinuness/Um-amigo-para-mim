import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/global.css'
import {FiPlus} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import '../styles/pages/homepage.css'
import Jade from '../images/300.jpg'


export default function Home() {
    return (
        <div id="homepage">
            <Navbar />
            <h1>Um amigo para mim</h1>
              
              <main>
                
              </main>


            <Link to="/app" className="enter-app">
                <FiPlus size={25} color="white" />

            </Link>
            <Footer />
        </div>
    )
}