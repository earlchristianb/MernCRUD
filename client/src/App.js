import './App.css';
import Navbar from './components/navbar/navbar.jsx';
import CharacterDisplay from './components/characterGrid/characterGrid.jsx';
import React from 'react';
import { Route, Switch } from "react-router-dom";
import CharacterDetails from './components/characterDetails/characterDetails.jsx';
import CreateCharacter from './components/createCharacter/createCharacter.jsx';
import login from './components/login/login'; 
import EditCharacter from './components/editCharacter/editCharacter.jsx';
import "bootstrap/dist/css/bootstrap.css";

function App () {
  
  return (
    <div className="app"  >
    <React.Fragment>
      <Navbar/>
      <Switch id="1">
        <Route exact path="/" component={CharacterDisplay}/>
          <Route exact path="/create" component={ CreateCharacter } />
          <Route exact path="/edit/:id" component={ EditCharacter} />
        <Route exact path="/:id" component={ CharacterDetails } />
        <Route exact path="/login"  component={login}/>
      </Switch>
    
         
         
    </React.Fragment>
  
   </div>
   
      
        
     
        
    
     
      
      

      
  
  )
}

export default App;
