import React from 'react';
import {Route} from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import Nav from './nav';
import About from './about';
import SecretList from './secret_list';

const App = () => (
    <div className="container">
        <Nav/>


        <Route path='/about' component={About}/>
        <Route path="/secret-list" component={SecretList}/>
    </div>   
    
);

export default App;
