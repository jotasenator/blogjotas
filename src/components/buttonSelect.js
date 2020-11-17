import React from 'react'
import { useTranslation } from 'react-i18next';

export default function ButtonSelectLanguage() {
    const { t, i18n } = useTranslation('global');

    return (
        <>
            {/* input language seleccion*/}

            <select className='buttonSelect'>
                <option onClick={() => { i18n.changeLanguage('es') }}  >
                    Español
                    </option>
                <option onClick={() => { i18n.changeLanguage('en') }}>
                    English
                    </option>
                <option onClick={() => { i18n.changeLanguage('it') }}>
                    Italiano
                    </option>
                <option onClick={() => { i18n.changeLanguage('fr') }}>
                    Français
                    </option>
                <option onClick={() => { i18n.changeLanguage('pt') }}>
                    Português
                    </option>
                <option onClick={() => { i18n.changeLanguage('de') }}>
                    Deutsch
                    </option>
                <option onClick={() => { i18n.changeLanguage('hi') }}>
                    हिन्दी
                    </option>
                <option onClick={() => { i18n.changeLanguage('ru') }}>
                    Pусский
                    </option>
                <option onClick={() => { i18n.changeLanguage('zh') }}>
                    中文
                    </option>
                <option onClick={() => { i18n.changeLanguage('ja') }}>
                    日本語
                    </option>
            </select>

        </>

    )
}