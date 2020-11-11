import React from 'react'
import pdf1 from '../books/python/automate the boring stuff with python.pdf'
import pdf2 from '../books/python/inventa-tus-propios-juegos-con-Python.pdf'
import pdf3 from '../books/python/python-by-vilar.pdf'
import pdf4 from '../books/python/Python_for_Dummies_(2006).pdf'

const MyHistoryPython = () => {
    return (
        <div className='container'>
            <h1>mi historia con Python</h1>

            <p>En octubre del año 2019 comenzó mi viaje al mundo de la programación.</p>

            <p>¿¡En serio!?</p>

            <p>No sería justo si dijera lo anterior.</p>

            <p >Siempre me fascinó la programación sólo que no con la determinación actual.
            En el pre universitario daba mis primeros pasos con “MSX-Basic”, allá por el año
            1995, pero ahí quedó todo.</p>

            <p>Pasó el tiempo y aunque ávido del trabajo en la computadora mis opciones
            laborales sólo convergían en una hoja de cálculo en Microsoft Excel cuando iba
            a enfrentar algún problema extra.</p>

            <p>Yo no sabía programar en ningún lenguaje (todavía :P) pero estaba seguro
            que tener esta habilidad podría serme útil cuando fuera a enfrentarme a algún problema, a
            hacer más fácil una actividad laboral, etc.</p>

            <p>Siempre la idea de que podía automatizar mis actividades me perseguía pero
            qué hacer…, con 38 años, sin mucho tiempo para estudiar surge la siguiente pregunta:</p>

            <p>¿Qué lenguaje de programación tiene una curva de aprendizaje amable, y que pueda
            servir para muchas actividades?</p>

            <p>R/ Puede que hayan otros pero <strong>Python</strong> cambió mi vida.</p>

            <p>Python es un lenguaje de programación de alto nivel, con aplicaciones en numerosas
            áreas incluyendo desarrollo web, scripting, cómputo científico e inteligencia artificial.</p>

            <p>No voy a detenerme en las interioridades del mismo, pero si voy a compartir contigo todo
            con lo que me nutrí para sumergirme en este lenguaje, ordenado cronológicamente. Luego te
            daré el mejor consejo para aprenderlo.</p>

            <div className='orderedList'>
                <ol>
                    <li>Lo primero es instalar Python, desde la página
                        oficial: <a href='https://www.python.org/' target='_blank' rel='nofollow noopener noreferrer'
                        >https://www.python.org/</a>.
                </li>
                    <li>Lo segundo es buscar un programa que nos ayude con autocompletamiento de
                    código, sugerencias, y otras facilidades. En el curso de youtube que te voy
                    a sugerir en el punto número 4 el profesor eligió “Sublime Text 3”. Te recomiendo
                    lo mismo, aunque después encontrarás otros que pueden ser de tu interés. Puedes descargarlo
                    aquí: <a href='https://www.sublimetext.com/3' target='_blank' rel='nofollow noopener noreferrer'
                        >https://www.sublimetext.com/3</a>.

                </li>
                    <li><a href={pdf4} target='_blank' rel='nofollow noopener noreferrer'
                        download='Python_for_Dummies.pdf'>Python_for_Dummies.pdf</a>.
                    Como su nombre lo indica este libro es para principiantes,
                    tiene un buen ritmo con ejemplos sencillos. Debes tener en cuenta que en este libro se trata
                    sobre Python 2 y algunas sintaxis cambian con respecto a la versión que seguro instalarás
                    (Python 3) por lo que habrá diferencias, por ejemplo print 2 + 3 vs print(2 + 3), etc. Pero para
                    que señalarle manchas al sol :)

                </li>
                    <li>Curso de youtube “Píldoras informáticas”. El profesor <u>Juan Díaz</u> te tomará
                    de la mano en un exquisito viaje donde pedagogía y didáctica moldearán al programador que hay
                    en ti. Después de este curso con mucha seguridad podrás crear tus primeros programas, de los
                    cuales estarás siempre orgulloso. Visítalo y mira a ver que te
                    parece: <a href='https://www.youtube.com/watch?v=G2FCfQj-9ig&list=PLU8oAlHdN5BlvPxziopYZRd55pdqFwkeS' target='_blank'
                            rel='nofollow noopener noreferrer'
                        >https://www.youtube.com/watch?v=G2FCfQj-9ig&list=PLU8oAlHdN5BlvPxziopYZRd55pdqFwkeS</a>.

                </li>
                    <li>Página web <a href='https://j2logo.com' target="_blank" rel="nofollow noopener noreferrer">www.j2logo.com</a>. El
                    profesor <u>Juan José Lozano Gómez</u> te dará un vistazo de la programación más contextualizada a la realidad. Te mostrará diferentes
                    frameworks para realizar diferentes actividades. Te darás cuenta que “Python” en sí mismo es sólo
                    el comienzo, y que esto solo podría ponerse mejor. Conviértete entonces en maestro pythonista.

                </li>
                    <li>Aplicación móvil: “SoloLearn”. Esta aplicación en tu dispositivo móvil te permitirá escoger
                    un curso(Python en este caso) a aprender de manera muy objetiva junto con teoría y preguntas para
                    reforzar la misma. Así podrás estudiar en cualquier lugar mientras descansas sentado o acostado en
                    la cama. Esta aplicación tiene varias opciones que te resultarán amenas. Además también puede ser una
                    fuente de consulta cuando tengas alguna duda. Su comunidad es activa y puedes retarlos utilizando el
                    lenguaje que prefieras. Por si todo lo anterior fuera poco, una vez completado el curso obtienes un
                    certificado digital que lo avala. Genial. Si estás en tu ordenador te comparto este link por si
                    quieres irte
                    familiarizando: <a href='https://www.sololearn.com' target="_blank" rel="nofollow noopener noreferrer">https://www.sololearn.com</a>.

                </li>
                    <li>En lo que haces todo lo anterior por qué no crearte perfiles en diferentes sitios web en los cuales
                    podrás preguntar dudas, postear código o darte a conocer en este mundo:
                </li>
                    <div className='unorderedList'>
                        <ul>
                            <li><a href='https://stackoverflow.com' target="_blank" rel="nofollow noopener noreferrer">www.stackoverflow.com</a> --{">"} Aquí podrás preguntar tus dudas específicas, para lo cual
                            tienes que seguir unos patrones que aprenderás una vez crees tu perfil y sigas las
                            instrucciones en la página.
                        </li>
                            <li><a href='https://github.com' target="_blank" rel="nofollow noopener noreferrer">www.github.com</a> --{">"} Vas a poder subir todo el código que desees y muchas cosas más.
                        En mi opinión es imperativo que tengas una cuenta aquí por todas las ventajas que
                        puede ofrecerte.
                        </li>
                            <li><a href='https://codersrank.com' target="_blank" rel="nofollow noopener noreferrer">www.codersrank.com</a> --{">"} Ojalá existiera un sitio web que teniendo en cuenta tu código y
                        otras variables creara un ranking y graficara tu actividad para que sea fácilmente
                        mostrada...pues existe y es fabuloso.
                        </li>

                            <li> <a href='https://linkedin.com' target="_blank" rel="nofollow noopener noreferrer">www.linkedin.com</a> --{">"} Ya que estamos acá, por qué no hacernos un perfil laboral con todas
                        las de la ley. Estarás de acuerdo conmigo que no existe un sitio mejor que este. Es
                        imperativo que te des a conocer por esta vía. Los reclutadores a cada rato
                        revisan a ver quién es talentoso y así captarlo, quizás, para el trabajo ideal.
                        </li>
                        </ul>
                    </div>

                    <li >¿Crees haber adquirido conocimientos y quieres retarte ? Pues es hora de la prueba de fuego. Voy a compartir contigo
                    una página de la cual soy adicto: <a href=' https://hackerrank.com' target="_blank" rel="nofollow noopener noreferrer">www.hackerrank.com</a>. En ella podrás practicar en los lenguajes que tiene
                    disponible de una manera amena y dinámica, con muchas entradas de datos para probar adecuadamente tu código
                    y por si fuera poco cuando te sientas listo puedes hacer exámenes para certificar tus conocimientos y obtener
                    diplomas. Honestamente, no he encontrado algo mejor.

                </li>
                    <li>Para cuando te aburras un poco del color rgb(25, 169, 77) te propongo otra página donde puedes practicar
                    tus habilidades <a href='https://codewars.com' target="_blank" rel="nofollow noopener noreferrer">www.codewars.com</a>. ¡Honor sensei, a practicar katas!
                </li>

                </ol>
            </div>


            <p> Anímate, una vez comenzado este viaje nada será como antes.</p >

            <p>Si empiezas tempranamente podrás enfrentarte a las tareas teniendo como aliada una poderosa herramienta.
            Si empiezas a una edad parecida a la mía entonces aquellos problemas que no habías podido resolver y que te
            atormentaban en las noches podrán ser ajusticiados.</p>

            <p>Ahora te menciono algunos programas que hice cuando empezaba para saciar mis inquietudes:</p>
            <ul>
                <li>Mi deporte favorito es el fútbol y pues, el primer programa que hice con seriedad fue un simulador
                de un mundial de futbol, todavía tengo pendiente añadirle probabilidades porque ahora mismo todos los
                resultados son aleatorios pero me fue satisfactorio cuando lo terminé.
                En <a href='https://stackoverflow.com' target="_blank" rel="nofollow noopener noreferrer">
                        www.stackoverflow.com</a> respondieron
                      a mis dudas particulares y así fuí learning - by - doing. Diviértete con el código
                acá:  <a href='https://github.com/jotasenator/SimuladorMundialFutbol2018'
                        target="_blank" rel="nofollow noopener noreferrer">
                        https://github.com/jotasenator/SimuladorMundialFutbol2018</a>.
            </li>
                <li>En una oportunidad trabajé en un lugar donde se transportaban mercancías. Dichas mercancías venían
                en contenedores. Recuerdo que mis colegas y yo invertíamos ridículas cantidades de tiempo buscando
                información sobre determinado contenedor en una hoja de Microsoft Excel que tenía toneladas de información.
                Un código para optimizar la búsqueda podrás encontrarlo
                acá:  <a href='https://github.com/jotasenator/leer-csv-busqueda-contenedores'
                        target="_blank" rel="nofollow noopener noreferrer">
                        https://github.com/jotasenator/leer-csv-busqueda-contenedores</a>.
                </li>
                <li>Cierto día estaba conversando con un amigo y para tomar una decisión decidimos jugar piedra - papel - tijera.
                Perdí y tuve que cumplir la encomienda. Él se jactó diciendo que nunca perdía porque leía mis emociones.
                Volví a mi casa y al otro día fui a verlo. Mira lo que le mostré
                acá: <a href='https://github.com/jotasenator/piedra-papel-tijera'
                        target="_blank" rel="nofollow noopener noreferrer">https://github.com/jotasenator/piedra-papel-tijera</a>.
            </li>
            </ul>

            < p >¿Increíble verdad ? </ p>

            <p>Como todos los comienzos al principio aprender algo nuevo te será lento. Sin embargo, en poco tiempo te
        reirás de todo esto.</p>

            <p>Entonces…</p>

            <p>¿Estás listo para el mejor consejo sobre aprender no sólo programación, sino cualquier cosa en esta vida?</p>

            <p>R/ Nunca te rindas. Nunca le hagas caso a quien te diga que estás perdiendo el tiempo, o que estás muy joven,
            o que estás muy viejo. Rodéate de amigos que compartan los mismos gustos. Plantéate problemas y su manera de
            solucionarlos. Practica y recuerda. ¡Lo mejor está por venir!</p>

            <p>PS: Aquí te dejo otros libros que puedes consultar en el momento que encuentres
            pertinente:
            </p>
            <ul>

                <li>
                    <a href={pdf2}
                        target='_blank' rel=' nofollow noopener noreferrer' type='application/pdf'
                        download='Inventa-tus-propios-juegos-con-Python' >Inventa-tus-propios-juegos-con-Python
                        </a>
                </li>
                <li>
                    <a href={pdf3}
                        target='_blank' rel=' nofollow noopener noreferrer' type='application/pdf'
                        download='Python-by-vilar.pdf'>Python-by-vilar.pdf
                        </a>
                </li>
                <li>
                    <a href={pdf1}
                        target='_blank' rel=' nofollow noopener noreferrer' type='application/pdf'
                        download='Automate the boring stuff with python.pdf'>Automate the boring stuff with python .pdf
                        </a>
                </li>
            </ul>
            <p>
                Manos a la obra, rodéate de Python, usa internet, conversa, escucha, practica y por sobre
                todo <strong> diViéRTetE</strong>.
                </p>

        </div >

    )
}

export default MyHistoryPython