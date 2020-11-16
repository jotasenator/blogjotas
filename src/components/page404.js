import React from 'react'
import { Link } from 'react-router-dom'
import pic1 from '../images/404not found/maxresdefault.jpg'
import { useTranslation } from 'react-i18next';
import { useLocation } from "react-router-dom"

export default function Page404() {
    const locations = useLocation();
    const { t, i18n } = useTranslation('global');
    return (
        <div className='NF404'>
            <div>
                <h1>{t('page404.p1')}</h1>
                <div className='locationMSG'>
                    <div>{locations.pathname}</div> <h2>{t('page404.p2')}</h2>
                </div>
                <Link to="/" className='link'>
                    {t('page404.p3')}
                </Link>
            </div>
            <img className='pic404' src={pic1} alt='not Found!!' />

        </div>

    )
}

