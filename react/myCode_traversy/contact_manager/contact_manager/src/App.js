import React, { Component } from 'react';
// import logo from './logo.svg'; // you deleted that logo image
// imported from Componets directory
import Header from './Components/layout/Header'; 
import Contacts from './Components/Contacts/Contacts'; 
import AddContact from './Components/Contacts/addContact';
import EditContact from './Components/Contacts/editContact';
import about from './Components/Pages/about';  
import  notFound from './Components/Pages/404_not_found';  
import Provider from './Context';    
/////////////  //

import { BrowserRouter as Router, Route, Switch } 
from '../node_modules/react-router-dom';
////////////////  
import Test from './Components/test/test'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';   

class App extends Component {  
  render() {
    return(
    <Provider >
      <Router> 
      <div className="App">
            <Header brandName = "HOW"/> 
            <div className="container">
            <AddContact/>
        <Switch>
          <Route exact path="/" use="strict" render={() => {
            return( 
              <Contacts/> 
            )
          }}  />
          <Route exact path="/about" use="strict" render={() => {
            return(
              <about />
            )
          }} />
          <Route exact path="/contact/edit" use="strict" render={() => {
            return(
              <EditContact  />
            )
          }} />
          <Route exact path="contact/add" use="strict" render={() => {
            return(
              <AddContact/>
            )
          }}  />  
          <Route Component={notFound} />
           
        </Switch>
        </div>
        </div>
      </Router>
    </Provider> 
      );
  }   
}

export default App;
