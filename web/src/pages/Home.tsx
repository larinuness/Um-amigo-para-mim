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

                <div className="box-model">

                    <div className="content-box">
                        <img src={Jade} alt="Jade" />
                        <h3>Jade</h3>
                        <p>Meu nome é Jade e sou demais de linda.
                        Já sou adulta, mas não vá ainda, me ouça, prometo contigo formar uma família.Fui encontrada bem magra,
                        muito desidratada, caía e me levantava. Mas com ajuda de humanos maravilhosos consegui me recuperar, sou muito
                        carinhosa e dócil, adoro crianças.</p>
                        <h5>Contato:</h5><span>lalanunnes@gmail.com</span>
                    </div>
                </div>

                <div className="box-model">

                    <div className="content-box">
                        <img src={Josh} alt="Josh" />
                        <h3>Josh</h3>
                        <p>Você sabia que eu e meus irmãos nascemos nas ruas de São Paulo? Foi muito difícil para nós.
                        Qualquer brincadeira me interessa. E curto muito um carinho também. Mas o que eu mais quero é uma casa para chamar de minha, sabe?
                        Você topa me levar para a sua casa e sermos felizes para sempre?.</p>
                        <h5>Contato:</h5><span>lalanunnes@gmail.com</span>
                    </div>
                </div>

                <div className="box-model">

                    <div className="content-box">
                        <img src={Leo} alt="Leo" />
                        <h3>Leo</h3>
                        <p>Você sabia que eu e meus irmãos nascemos nas ruas de São Paulo? Foi muito difícil para nós.
                        Qualquer brincadeira me interessa. E curto muito um carinho também. Mas o que eu mais quero é uma casa para chamar de minha, sabe?
                        Você topa me levar para a sua casa e sermos felizes para sempre?.</p>
                        <h5>Contato:</h5><span>lalanunnes@gmail.com</span>
                    </div>
                </div>

                <div className="box-model">

                    <div className="content-box">
                        <img src={Maia} alt="Maia" />
                        <h3>Garfield</h3>
                        <p>Esse gatão amarelo da foto não te lembra um famoso gato amarelo da televisão?
                        Pois sou eu mesmo, o Garfield! Sim, sou muito parecido com ele, tenho a mesma exuberância felina,
                            mas troco a lasanha por um bom sachê de qualquer sabor. Me dá essa chance de ser feliz em um lar só meu?</p>
                            <h5>Contato:</h5><span>lalanunnes@gmail.com</span>
                    </div>
                </div>
                <div className="box-model">

                    <div className="content-box">
                        <img src={Jade} alt="Jade" />
                        <h3>Jade</h3>
                        <p>Meu nome é Jade e sou demais de linda.
                        Já sou adulta, mas não vá ainda, me ouça, prometo contigo formar uma família.Fui encontrada bem magra,
                        muito desidratada, caía e me levantava. Mas com ajuda de humanos maravilhosos consegui me recuperar, sou muito
                        carinhosa e dócil, adoro crianças.</p>
                        <h5>Contato:</h5><span>lalanunnes@gmail.com</span>
                    </div>
                </div>

                <div className="box-model">

                    <div className="content-box">
                        <img src={Josh} alt="Josh" />
                        <h3>Josh</h3>
                        <p>Você sabia que eu e meus irmãos nascemos nas ruas de São Paulo? Foi muito difícil para nós.
                        Qualquer brincadeira me interessa. E curto muito um carinho também. Mas o que eu mais quero é uma casa para chamar de minha, sabe?
                        Você topa me levar para a sua casa e sermos felizes para sempre?.</p>
                        <h5>Contato:</h5><span>lalanunnes@gmail.com</span>
                    </div>
                </div>

                <div className="box-model">

                    <div className="content-box">
                        <img src={Leo} alt="Leo" />
                        <h3>Leo</h3>
                        <p>Você sabia que eu e meus irmãos nascemos nas ruas de São Paulo? Foi muito difícil para nós.
                        Qualquer brincadeira me interessa. E curto muito um carinho também. Mas o que eu mais quero é uma casa para chamar de minha, sabe?
                        Você topa me levar para a sua casa e sermos felizes para sempre?.</p>
                        <h5>Contato:</h5><span>lalanunnes@gmail.com</span>
                    </div>
                </div>

                <div className="box-model">

                    <div className="content-box">
                        <img src={Maia} alt="Maia" />
                        <h3>Garfield</h3>
                        <p>Esse gatão amarelo da foto não te lembra um famoso gato amarelo da televisão?
                        Pois sou eu mesmo, o Garfield! Sim, sou muito parecido com ele, tenho a mesma exuberância felina,
                        mas troco a lasanha por um bom sachê de qualquer sabor. Me dá essa chance de ser feliz em um lar só meu?</p>
                        <h5>Contato:</h5><span>lalanunnes@gmail.com</span>
                    </div>
                </div>



            </div>

            <Link to="/AddAnimal" className="enter-app">
                <FiPlus size={25} color="white" />

            </Link>
            <Footer />
        </div>
    )
}