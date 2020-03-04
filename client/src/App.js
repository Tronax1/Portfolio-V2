import React from 'react';
import {Route, Switch} from 'react-router-dom'
import ProjectsPage from './Components/Projects/ProjectsPage'
import ContactPage from './Components/Contact/ContactPage'
import AboutPage from './Components/About/AboutPage'
import HomePage from './Components/Home/HomePage'
import NavBar from './Components/Navigation/NavBar'

function App() {
  return (
      <>
        <NavBar/>
        <main>
          <Switch>
            <Route path = "" component = {HomePage} exact />
            <Route path = "/About" component = {AboutPage} />
            <Route path = "/Projects" component = {ProjectsPage} />
            <Route path = "/Contact" component = {ContactPage} />
          </Switch>
        </main>
      </>
  );
}

export default App;
