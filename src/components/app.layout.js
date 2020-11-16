import React from "react";
import Navbar from './navBar'
import Footer from './footer'
import ButtonTop from './buttonTop'
import Inicio from './inicio'
import Contacto from './contacto'
import MyHistoryPython from './myHistoryPython'
import MyHistoryJS from './myHistoryJS'
import { Route, Redirect } from 'react-router-dom'


export default function AppLayout() {

    return (
        <>
            <Navbar />
            <Route exact path='/' component={Inicio} />
            <Route path='/python' component={MyHistoryPython} />
            <Route path='/javascript' component={MyHistoryJS} />
            <Route path='/contacto' component={Contacto} />
            <Redirect to="404-not-found" />
            <ButtonTop />
            <Footer />
        </>
    )
}