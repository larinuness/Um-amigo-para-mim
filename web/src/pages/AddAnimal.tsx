import react from 'react'
import NavBar from '../components/Navbar'
import {FiPlus} from 'react-icons/fi'
import '../styles/pages/addanimalpage.css'

export default function AddAnimal() {
    return(
        <div id="addpage">
            <NavBar />
            <main>
        <form className="addanimal-form">
          <fieldset>
            <legend>Dados</legend>


            <div className="input-block">
              <label htmlFor="name">Nome</label>
              <input id="name" />
            </div>

            <div className="input-block">
              <label htmlFor="about">Sobre <span>Máximo de 300 caracteres</span></label>
              <textarea id="name" maxLength={300} />
            </div>

            <div className="input-block">
              <label htmlFor="images">Fotos</label>

              <div className="uploaded-image">

              </div>

              <button className="new-image">
                <FiPlus size={24} color="#15b6d6" />
              </button>
            </div>

            <div className="input-block">
              <label htmlFor="contato">Contato <span>Email ou telefone</span></label>
              <input id="contato" />
            </div>
          </fieldset>

          
          

          <button type="submit">Confirmar</button>
        </form>
      </main>
        </div>
    )
}
