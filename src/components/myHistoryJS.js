import React from 'react'
import pdf5 from '../books/javascript/A Smarter Way to Learn JavaScript.pdf'
import pdf6 from '../books/javascript/Beginning JavaScript - 5th Ed.pdf'
import pdf7 from '../books/javascript/Learning-javascript.pdf'

const MyHistoryJS = () => {
    return (
        <div className='container'>

            <h1>mi historia con JavaScript</h1>

            <p>¿Creías que el viaje terminaría ahí verdad?</p>

            <p>El ser humano, para bien o para mal, es bastante inconforme, y siempre quiere más.</p>

            <p>Sentí curiosidad… ciertamente creo que nada es imposible con un poco de dedicación
            y de todas formas el aprendizaje siempre va a ser más rápido que cuando no tenía idea alguna.
            </p>

            <p>Así fue que después de 7 meses con Python comencé a aprender JavaScript (HTML y CSS también)
            porque me atraía el desarrollo web, específicamente la parte que se conoce como Front-End.
            Además de que Javascript también se considera un lenguaje de programación menos complicado que otros.
            Es que con tan solo tener el navegador web instalado en tu ordenador puedes hacer cosas en la consola que
            viene integrada. Una maravilla.</p>
            <p>
                Te comento que, aunque puedes escoger el programa que desees para el autocompletamiento y revisión de tu código,
                hay una fuerte tendencia entre mis conocidos por Visual Studio Code. Ya me estoy dando cuenta por qué.
                Instálalo desde aquí: <a href='https://code.visualstudio.com/' target='_blank' rel="nofollow noopener noreferrer">
                    https://code.visualstudio.com/</a>.
            </p>

            <p>Hoy por hoy Javascript es uno de los lenguajes más populares en el mundo y es utilizado para añadir
            interactividad a páginas web, procesar datos, así como crear distintos tipos de aplicaciones
            (aplicaciones móviles, aplicaciones de escritorio, juegos, etc.)
            </p>

            <p>Teniendo perfiles en los sitios web mencionados en mi otra historia me dediqué a preguntar y recopilar
            información para estudiar. Hago énfasis en que siempre accedo a la aplicación móvil SoloLearn para tener el primer
            acercamiento al lenguaje y automáticamente después
            utilizo <a href='https://hackerrank.com' target='_blank' rel="nofollow noopener noreferrer">www.hacherrank.com</a> para estudiarlo y practicarlo.
            Lo anterior junto con los libros que te compartiré inmediatamente lo considero una mezcla de lo más interesante.
            </p>
            <ul>
                <li>
                    <a href={pdf7}
                        target='_blank nofollow noopener noreferrer' type='application/pdf'
                        download='Learning-javascript.pdf'>Learning-javascript.pdf</a>
                </li>
                <li>
                    <a href={pdf5}
                        target='_blank nofollow noopener noreferrer' type='application/pdf'
                        download='A Smarter Way to Learn JavaScript.pdf'>A Smarter Way to Learn JavaScript.pdf</a>
                </li>
                <li>
                    <a href={pdf6}
                        target='_blank nofollow noopener noreferrer'
                        type='application/pdf' download='Beginning JavaScript - 5th Ed.pdf'>Beginning JavaScript - 5th Ed.pdf</a>
                </li>

            </ul>

            <p>Para no perder la costumbre aquí te muestro alguno programas que realicé al comenzar:</p>
            <ul>
                <li>En algún momento me pongo a conversar con mi esposa sobre los signos zodiacales y no tenía a mano
                ninguna fuente de información para aclarar cierto detalle con las fechas etc. Por lo que lo primero que
                hice seriamente en este lenguaje fue lo
                siguiente: <p><a href='https://github.com/jotasenator/javascript/blob/master/ejercicio%20Mixto%20signo%20zodiacal.js'
                        target='_blank' rel=' nofollow noopener noreferrer' >
                        https://github.com/jotasenator/javascript/blob/master/ejercicio%20Mixto%20signo%20zodiacal.js
                            </a>.
                            </p>

                </li>
                <li>
                    Un día estaba esperando para entrar a un restaurante cuando se me ocurrió tratar de simular la cola.
                    Aquí te lo
                    muestro: <a href='https://github.com/jotasenator/html/blob/master/simulacion%20cola%20restaurante.html'
                        target='_blank ' rel="nofollow noopener noreferrer">
                        https://github.com/jotasenator/html/blob/master/simulacion%20cola%20restaurante.html</a>.
                </li>
                <li>
                    En mi antiguo trabajo era necesario, dadas las coordenadas de estacionamiento y orientacion de un teodolito,
                    poder calcular el ángulo de replanteo y la distancia de un tercer punto. Lo resolví de esta
                    manera: <a href='https://github.com/jotasenator/html/blob/master/anguloReplanteo10CSS.html'
                        target='_blank ' rel="nofollow noopener noreferrer" >
                        https://github.com/jotasenator/html/blob/master/anguloReplanteo10CSS.html
                        </a>.
                </li>
            </ul>

            <p>Bueno, en eso estoy actualmente. Me encuentro estudiando una librería de JavaScript conocida por React.js.
            Con ella estoy haciendo esta especie de blog donde te muestro el camino que seguí y además me
            doy a conocer en este ámbito. Creo que esta información puede ser útil sencillamente porque ojalá yo hubiera
            encontrado algo parecido cuando empecé.
            </p>

            <p>Con el tiempo y la práctica espero poder hacer páginas web dinámicas e interesantes. Siempre un paso a la vez,
            que no hay nada más bonito que un día después de otro. Esto es sólo el comienzo.
            </p>
            <p>
                Es en este punto que comparto contigo el mejor sitio web para aprender no solo HTML5, CCS3 y JavaScript
                sino también Python y mucho más: <a href='https://www.w3schools.com/js/default.asp'
                    target='_blank' rel="nofollow noopener noreferrer">https://www.w3schools.com/js/default.asp</a>.           </p>

            <p>Si deseas aprender Javascript, y por consiguiente el desarrollo web, estoy seguro que no verás de la misma
            forma a tu navegador web.
            </p>

            <p>Nos vemos por las redes.</p>

        </div >
    )
}


export default MyHistoryJS 