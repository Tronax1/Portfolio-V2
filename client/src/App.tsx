import React from 'react';
import {Route, Switch} from 'react-router-dom'
import {
    ProjectsPage, 
    ContactPage, 
    AboutPage, 
    HomePage, 
    NavBar
    } from './Components'

const App: React.FC = () => {
  return (
      <>
        <NavBar/>
        <main>
          <Switch>
            <Route path = "/" component = {HomePage} exact />
            <Route path = "/About" component = {AboutPage} />
            <Route path = "/Projects" component = {ProjectsPage} />
            <Route path = "/Contact" component = {ContactPage} />
          </Switch>
        </main>
      </>
  );
}

export default App;
