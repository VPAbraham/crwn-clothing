import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.styles.scss';
import HomePage from './pages/homepage/homepage.component';
import HatsPage from './pages/hatspage/hatspage.component';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/hatspage' component={HatsPage}/>
      </Switch>
    </div>
  );
}


export default App;
