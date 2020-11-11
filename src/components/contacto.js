import React from 'react';
import MapView from './mapView'


const Contacto = () => {

    return (
        <div className='container'>
            <h1>¡anímate!</h1>
            <p>Cualquier motivo es bueno para conversar, compartir conocimentos,
            y estar en contacto.
            </p>
            <form
                method='post'
                action="mailto:contrerassenator@gmail.com"
                target='_blank'
                acceptcharset='UTF-8'
                enctype='text/plain'
                autocomplete='off'
                novalidate
            >
                <input type='text' placeholder='tu nombre' name='nick' />
                <input type='mail' placeholder='email@example.com '
                    pattern='[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})'
                    required
                    name='correo' />
                <textarea name="mensaje" placeholder='Cuéntame tu historia...'></textarea>
                <input className='enviar' type='submit' value='Enviar' />
            </form>
            <div className='map'>
                <MapView />
            </div>


        </div >

    )
}

export default Contacto