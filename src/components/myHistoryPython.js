import React from 'react'
import pdf1 from '../books/python/automate the boring stuff with python.pdf'
import pdf2 from '../books/python/inventa-tus-propios-juegos-con-Python.pdf'
import pdf3 from '../books/python/python-by-vilar.pdf'
import pdf4 from '../books/python/Python_for_Dummies_(2006).pdf'
import { useTranslation } from 'react-i18next';

const MyHistoryPython = () => {
    const { t, i18n } = useTranslation('global');
    return (
        <div className='container'>
            <h1>{t('myHistoryPython.p1')}</h1>

            <p>{t('myHistoryPython.p2')}</p>

            <p>{t('myHistoryPython.p3')}</p>

            <p>{t('myHistoryPython.p4')}</p>

            <p >{t('myHistoryPython.p5')}</p>

            <p>{t('myHistoryPython.p6')}</p>

            <p>{t('myHistoryPython.p7')}</p>

            <p>{t('myHistoryPython.p8')}</p>

            <p>{t('myHistoryPython.p9')}</p>

            <p>{t('myHistoryPython.p10')}</p>

            <p>{t('myHistoryPython.p11')}</p>

            <p>{t('myHistoryPython.p12')}</p>

            <div className='orderedList'>
                <ol>
                    <li>{t('myHistoryPython.p13')} <a href='https://www.python.org/' target='_blank' rel='nofollow noopener noreferrer'
                    >https://www.python.org/</a>.
                </li>
                    <li>{t('myHistoryPython.p14')} <a href='https://www.sublimetext.com/3' target='_blank' rel='nofollow noopener noreferrer'
                    >https://www.sublimetext.com/3</a>.

                </li>
                    <li><a href={pdf4} target='_blank' rel='nofollow noopener noreferrer'
                        download='Python_for_Dummies.pdf'>Python_for_Dummies.pdf</a>. {t('myHistoryPython.p15')}

                    </li>
                    <li className='justifyLeft'>{t('myHistoryPython.p16')} <a href='https://www.youtube.com/watch?v=G2FCfQj-9ig&list=PLU8oAlHdN5BlvPxziopYZRd55pdqFwkeS' target='_blank'
                        rel='nofollow noopener noreferrer'
                    >https://www.youtube.com/watch?v=G2FCfQj-9ig&list=PLU8oAlHdN5BlvPxziopYZRd55pdqFwkeS</a>.

                </li>
                    <li>{t('myHistoryPython.p17')} <a href='https://j2logo.com' target="_blank" rel="nofollow noopener noreferrer">www.j2logo.com</a>. {t('myHistoryPython.p18')}

                    </li>
                    <li>{t('myHistoryPython.p19')} <a href='https://www.sololearn.com' target="_blank" rel="nofollow noopener noreferrer">https://www.sololearn.com</a>.

                </li>
                    <li>{t('myHistoryPython.p20')}
                    </li>
                    <div className='unorderedList'>
                        <ul>
                            <li><a href='https://stackoverflow.com' target="_blank" rel="nofollow noopener noreferrer">www.stackoverflow.com</a> --{">"} {t('myHistoryPython.p21')}
                            </li>
                            <li><a href='https://github.com' target="_blank" rel="nofollow noopener noreferrer">www.github.com</a> --{">"} {t('myHistoryPython.p22')}
                            </li>
                            <li><a href='https://codersrank.com' target="_blank" rel="nofollow noopener noreferrer">www.codersrank.com</a> --{">"} {t('myHistoryPython.p23')}
                            </li>

                            <li> <a href='https://linkedin.com' target="_blank" rel="nofollow noopener noreferrer">www.linkedin.com</a> --{">"} {t('myHistoryPython.p24')}
                            </li>
                        </ul>
                    </div>

                    <li >{t('myHistoryPython.p25')} <a href=' https://hackerrank.com' target="_blank" rel="nofollow noopener noreferrer">www.hackerrank.com</a>. {t('myHistoryPython.p26')}

                    </li>
                    <li>{t('myHistoryPython.p27')} <a href='https://codewars.com' target="_blank" rel="nofollow noopener noreferrer">www.codewars.com</a>. {t('myHistoryPython.p28')}
                    </li>

                </ol>
            </div>


            <p> {t('myHistoryPython.p29')}</p >

            <p>{t('myHistoryPython.p30')}</p>

            <p>{t('myHistoryPython.p31')}</p>
            <ul>
                <li>{t('myHistoryPython.p32')} <a href='https://stackoverflow.com' target="_blank" rel="nofollow noopener noreferrer">
                    www.stackoverflow.com</a> {t('myHistoryPython.p33')}  <a href='https://github.com/jotasenator/SimuladorMundialFutbol2018'
                        target="_blank" rel="nofollow noopener noreferrer">
                        https://github.com/jotasenator/SimuladorMundialFutbol2018</a>.
            </li>
                <li className='justifyLeft'>{t('myHistoryPython.p34')}  <a href='https://github.com/jotasenator/leer-csv-busqueda-contenedores'
                    target="_blank" rel="nofollow noopener noreferrer">
                    https://github.com/jotasenator/leer-csv-busqueda-contenedores</a>.
                </li>
                <li className='justifyLeft'>{t('myHistoryPython.p35')} <a href='https://github.com/jotasenator/piedra-papel-tijera'
                    target="_blank" rel="nofollow noopener noreferrer">https://github.com/jotasenator/piedra-papel-tijera</a>.
            </li>
            </ul>

            < p >{t('myHistoryPython.p36')}</ p>

            <p>{t('myHistoryPython.p37')}</p>

            <p>{t('myHistoryPython.p38')}</p>

            <p>{t('myHistoryPython.p39')}</p>

            <p>{t('myHistoryPython.p40')}</p>

            <p>{t('myHistoryPython.p41')}
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
                {t('myHistoryPython.p42')}
            </p>

        </div >

    )
}

export default MyHistoryPython
