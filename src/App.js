import React from 'react';
import './App.css';
import Navbar from './components/navBar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import MyHistoryPython from './components/myHistoryPython'
import MyHistoryJS from './components/myHistoryJS'
import Inicio from './components/inicio'
import Contacto from './components/contacto'
import Footer from './components/footer';
import ButtonTop from './components/buttonTop'
import Helmet from 'react-helmet'
import Page404 from './components/page404'



function App() {
  return (
    <div>

      <Helmet>
        {/*< !--HTML Meta Tags -->*/}
        <title>Blog de joTas</title>
        <meta name="description" content="Principales sitios web para aprender. Libros. Consejos. Ejemplos de código." />

        {/*< !--Google / Search Engine Tags -->*/}
        <meta itemprop="name" content="Blog de joTas: Cómo aprender Python y JavaScript" />
        <meta itemprop="description" content="Principales sitios web para aprender. Libros. Consejos. Ejemplos de código." />
        {/*<meta itemprop="image" content="http://www.framer.com/static/images/social/framer.png" />*/}

        {/*< !--Facebook Meta Tags -->*/}
        {/*<meta property="og:url" content="https://www.framer.com" />*/}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Blog de joTas: Cómo aprender Python y JavaScript" />
        <meta property="og:description" content="Principales sitios web para aprender. Libros. Consejos. Ejemplos de código." />
        {/*<meta property="og:image" content="http://www.framer.com/static/images/social/framer.png" />*/}

        {/*< !--Twitter Meta Tags -->*/}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog de joTas: Cómo aprender Python y JavaScript" />
        <meta name="twitter:description" content="Principales sitios web para aprender. Libros. Consejos. Ejemplos de código." />
        {/*<meta name="twitter:image" content="http://www.framer.com/static/images/social/framer.png" />*/}

        {/*< !--Meta Tags Generated via http://heymeta.com -->*/}

      </Helmet>

      <BrowserRouter>
        < div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Inicio} />
            <Route path='/python' component={MyHistoryPython} />
            <Route path='/javascript' component={MyHistoryJS} />
            <Route path='/contacto' component={Contacto} />
            <Route component={Page404} />

          </Switch>
        </div >
      </BrowserRouter >
      <ButtonTop />
      <Footer />

    </div>






  );
}

export default App;
