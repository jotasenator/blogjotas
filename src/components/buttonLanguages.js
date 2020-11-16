import React from 'react';
import { useTranslation } from 'react-i18next';

const Languages = () => {
    const { t, i18n } = useTranslation('global');

    return (
        <div className='languages'>
            <button className='es'
                onClick={() => { i18n.changeLanguage('es') }}>Español</button>
            <button className='en'
                onClick={() => { i18n.changeLanguage('en') }}>Inglés</button>
            <button className='it'
                onClick={() => { i18n.changeLanguage('it') }}>Italiano</button>
            <button className='fr'
                onClick={() => { i18n.changeLanguage('fr') }}>Français</button>
            <button className='pt'
                onClick={() => { i18n.changeLanguage('pt') }}>Português</button>
            <button className='de'
                onClick={() => { i18n.changeLanguage('de') }}>Deutsch</button>
            <button className='hi'
                onClick={() => { i18n.changeLanguage('hi') }}>हिन्दी</button>
            <button className='ru'
                onClick={() => { i18n.changeLanguage('ru') }}>Pусский</button>
            <button className='zh'
                onClick={() => { i18n.changeLanguage('zh') }}>中文</button>
            <button className='ja'
                onClick={() => { i18n.changeLanguage('ja') }}>日本語</button>

            {/* input language seleccion*/}

            <select className='selectLanguage'>
                <option>
                    <button className='es'
                        onClick={() => { i18n.changeLanguage('es') }}>Español</button>
                </option>
                <option>
                    <button className='en'
                        onClick={() => { i18n.changeLanguage('en') }}>Inglés</button>
                </option>
                <option>
                    <button className='it'
                        onClick={() => { i18n.changeLanguage('it') }}>Italiano</button>
                </option>
                <option>
                    <button className='fr'
                        onClick={() => { i18n.changeLanguage('fr') }}>Français</button>
                </option>
                <option>
                    <button className='pt'
                        onClick={() => { i18n.changeLanguage('pt') }}>Português</button>
                </option>
                <option>
                    <button className='de'
                        onClick={() => { i18n.changeLanguage('de') }}>Deutsch</button>
                </option>
                <option>
                    <button className='hi'
                        onClick={() => { i18n.changeLanguage('hi') }}>हिन्दी</button>
                </option>
                <option>
                    <button className='ru'
                        onClick={() => { i18n.changeLanguage('ru') }}>Pусский</button>
                </option>
                <option>
                    <button className='zh'
                        onClick={() => { i18n.changeLanguage('zh') }}>中文</button>
                </option>
                <option >
                    <button className='ja'
                        onClick={() => { i18n.changeLanguage('ja') }}>日本語</button>
                </option>

            </select>

        </div >

    )
}

export default Languages