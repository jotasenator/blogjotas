import React from 'react';
import { NavLink } from 'react-router-dom'
import Me from './navbarPic'
import { useTranslation } from 'react-i18next';
import Languages from './buttonLanguages'


const Navbar = () => {
    const { t, i18n } = useTranslation('global');

    return (
        <nav className='navBar'>
            <ul>
                <div className='jotas'>
                    <li><p>Blog de j</p><p className='rotate'>oTa</p><p>s</p></li>
                </div>
                <li><NavLink exact to='/'>{t('navBar.p1')}</NavLink></li>
                <li><NavLink to='/python'>Python</NavLink></li>
                <li><NavLink to='/javascript'>Javascript</NavLink></li>
                <div className='toRight'>
                    <li><NavLink to='/contacto'>{t('navBar.p2')}</NavLink></li>
                    <li><Me /></li>
                </div>

            </ul>
            <Languages />
        </nav >

    )
}

export default Navbar