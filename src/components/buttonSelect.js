import React from 'react';
import { useTranslation } from 'react-i18next';

export default function ButtonSelectLanguage ()
{
    const { t, i18n } = useTranslation( 'global' );

    const handleChange = ( event ) =>
    {
        i18n.changeLanguage( event.target.value );
    };

    return (
        <>
            <form>
                <select className='buttonSelect' onChange={ handleChange }>
                    <option value='en'>English</option>
                    <option value='es'>Español</option>
                    <option value='it'>Italiano</option>
                    <option value='fr'>Français</option>
                    <option value='pt'>Português</option>
                    <option value='de'>Deutsch</option>
                    <option value='hi'>हिन्दी</option>
                    <option value='ru'>Pусский</option>
                    <option value='zh'>中文</option>
                    <option value='ja'>日本語</option>
                </select>
            </form>
        </>
    );
}