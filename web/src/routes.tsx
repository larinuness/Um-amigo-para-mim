import React from 'react'
import {Route,BrowserRouter,Switch} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import AddAnimal from './pages/AddAnimal'


function Routes() {
    return(
       <BrowserRouter>
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/About" component={About}/>
        <Route path="/Contact" exact component={Contact}/>
        <Route path="/Add-animal" exact component={AddAnimal}/>
        

      
        </Switch>
       </BrowserRouter>
       
    );
}

export default Routes;