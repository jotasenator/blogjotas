import React from 'react';
import Slider from './carousel';
import { useTranslation } from 'react-i18next';

const Inicio = () =>
{
    const { t, i18n } = useTranslation( 'global' );
    return (
        <div className='container'>

            <h1>{ t( 'inicio.p1' ) }</h1>

            <div className='pInicio'>

                <Slider />

                <p>
                    { t( 'inicio.p2' ) }
                </p>

                <p>
                    { t( 'inicio.p3' ) }
                </p>

                <p>
                    { t( 'inicio.p4' ) }
                </p>

                <p>
                    { t( 'inicio.p5' ) }
                </p>

                <p>
                    { t( 'inicio.p6' ) }
                </p>

                <p className='pRef-inicio'>
                    { t( 'inicio.p7' ) } <a href='https://www.proveyourworth.net/level3/start'
                        target='_blank' rel=' nofollow noopener noreferrer'>
                        https://www.proveyourworth.net/level3/start</a>.
                </p>



            </div >

        </div >

    );
};

export default Inicio;