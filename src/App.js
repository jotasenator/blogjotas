import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Page404 from './components/page404'
import Navbar from './components/navBar'
import Footer from './components/footer'
import ButtonTop from './components/buttonTop'
import Inicio from './components/inicio'
import Contacto from './components/contacto'
import MyHistoryPython from './components/myHistoryPython'
import MyHistoryJS from './components/myHistoryJS'
import Meta from './components/metaTags'

function App() {
  return (
    <div>
      <Meta />

      <BrowserRouter>
        < div className="App">
          <Navbar />
          <Switch>
            <Route exact path='jotasenator.github.io/blogjotas/' component={Inicio} />
            <Route path='/python' component={MyHistoryPython} />
            <Route path='/javascript' component={MyHistoryJS} />
            <Route path='/contacto' component={Contacto} />
            <Route component={Page404} />
          </Switch>
          <ButtonTop />
          <Footer />
        </div >
      </BrowserRouter >


    </div>






  );
}

export default App;
