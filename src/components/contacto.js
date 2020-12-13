import React from 'react';
import MapView from './mapView'
import { useTranslation } from 'react-i18next';


const Contacto = () => {
    const { t, i18n } = useTranslation('global');

    return (
        <div className='container'>
            <h1>{t('contacto.p1')}</h1>
            <p>{t('contacto.p2')}
            </p>
            <form className='form'
                method='post'
                action="mailto:contrerassenator@gmail.com"
                target='_blank'
                acceptcharset='UTF-8'
                enctype='text/plain'
                autocomplete='off'
                novalidate
            >
                <input type='text' placeholder={t('contacto.p3')} name='nick' />
                <input type='mail' placeholder={t('contacto.p6')}
                    pattern='[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})'
                    required
                    name='correo' />
                <textarea name="mensaje" placeholder={t('contacto.p4')}></textarea>
                <input className='enviar' type='submit' value={t('contacto.p5')} />
            </form>
            <div className='map'>
                <MapView />
            </div>


        </div >

    )
}

export default Contacto