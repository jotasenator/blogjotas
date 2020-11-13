import React from 'react'
import { Link } from 'react-router-dom'
import pic1 from '../images/404not found/maxresdefault.jpg'
import { useTranslation } from 'react-i18next';

export default function Page404({ location }) {
    const { t, i18n } = useTranslation('global');
    return (
        <div className='NF404'>
            <h1>{t('page404.p1')}</h1>
            <div >
                <h2>{location.pathname} {t('page404.p2')}</h2>
            </div>
            <Link to="/" className='link'>
                {t('page404.p3')}
            </Link>
            <img src={pic1} alt='not Found!!' />

        </div>

    )
}

