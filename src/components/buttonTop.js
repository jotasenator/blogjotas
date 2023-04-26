import React, { useState } from 'react';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';



const ButtonTop = () =>
{
    const { t, i18n } = useTranslation( 'global' );

    let [ , setTop ] = useState( '' );//el hook era [top,setTop] pero top no se usa

    const ToTop = () =>
    {
        setTop(
            document.documentElement.scrollTo( {
                top: 0,
                behavior: 'smooth'
            } )
        );
    };

    const location = useLocation();
    console.log( location.pathname );

    return (
        <div className='toTop' title={ t( 'buttonTop.p1' ) }>
            { location.pathname !== '/blogjotas' && <ArrowDropUpIcon className='buttonToTop' onClick={ ToTop } /> }
        </div >

    );
};

export default ButtonTop;