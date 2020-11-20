import React from 'react'
import pdf5 from '../books/javascript/A Smarter Way to Learn JavaScript.pdf'
import pdf6 from '../books/javascript/Beginning JavaScript - 5th Ed.pdf'
import pdf7 from '../books/javascript/Learning-javascript.pdf'
import { useTranslation } from 'react-i18next';

const MyHistoryJS = () => {
    const { t, i18n } = useTranslation('global');
    return (
        <div className='container'>

            <h1>{t('myHistoryJS.p1')}</h1>

            <p>{t('myHistoryJS.p2')}</p>

            <p>{t('myHistoryJS.p3')}</p>

            <p>{t('myHistoryJS.p4')}</p>

            <p>{t('myHistoryJS.p5')}</p>
            <p>{t('myHistoryJS.p6')} <a href='https://code.visualstudio.com/' target='_blank' rel="nofollow noopener noreferrer">
                https://code.visualstudio.com/</a>.
            </p>

            <p>{t('myHistoryJS.p7')}</p>

            <p>{t('myHistoryJS.p8')} <a href='https://hackerrank.com' target='_blank' rel="nofollow noopener noreferrer">www.hacherrank.com</a> {t('myHistoryJS.p9')}
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

            <p>{t('myHistoryJS.p10')}</p>
            <ul className='lia'>
                <li>{t('myHistoryJS.p11')} <a href='https://github.com/jotasenator/javascript/blob/master/ejercicio%20Mixto%20signo%20zodiacal.js'
                    target='_blank' rel=' nofollow noopener noreferrer' >
                    https://github.com/jotasenator/javascript/blob/master/ejercicio%20Mixto%20signo%20zodiacal.js
                            </a>.


                </li>
                <li>
                    {t('myHistoryJS.p12')} <a href='https://github.com/jotasenator/html/blob/master/simulacion%20cola%20restaurante.html'
                        target='_blank ' rel="nofollow noopener noreferrer">
                        https://github.com/jotasenator/html/blob/master/simulacion%20cola%20restaurante.html</a>.
                </li>
                <li>
                    {t('myHistoryJS.p13')} <a href='https://github.com/jotasenator/html/blob/master/anguloReplanteo10CSS.html'
                        target='_blank ' rel="nofollow noopener noreferrer" >
                        https://github.com/jotasenator/html/blob/master/anguloReplanteo10CSS.html
                        </a>.
                </li>
            </ul>

            <p>{t('myHistoryJS.p14')}</p>

            <p>{t('myHistoryJS.p15')}</p>
            <p>
                {t('myHistoryJS.p16')} <a href='https://www.w3schools.com/js/default.asp'
                    target='_blank' rel="nofollow noopener noreferrer">https://www.w3schools.com/js/default.asp</a>.           </p>

            <p>{t('myHistoryJS.p17')}</p>

            <p>{t('myHistoryJS.p18')}</p>

        </div >
    )
}


export default MyHistoryJS 