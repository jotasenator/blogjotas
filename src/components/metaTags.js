import React from 'react'
import Helmet from 'react-helmet'
import { useTranslation } from 'react-i18next';

export default function Meta() {
    const { t, i18n } = useTranslation('global');
    return (
        <Helmet>
            {/*< !--HTML Meta Tags -->*/}
            <title>Blog de joTas</title>
            <meta name="description" content={t('metaTags.p1')} />

            {/*< !--Google / Search Engine Tags -->*/}
            <meta itemprop="name" content="Blog de joTas: Python & JavaScript" />
            <meta itemprop="description" content={t('metaTags.p1')} />


            {/*< !--Facebook Meta Tags -->*/}
            {/*<meta property="og:url" content="https://www.framer.com" />*/}
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Blog de joTas: Python & JavaScript" />
            <meta property="og:description" content={t('metaTags.p1')} />


            {/*< !--Twitter Meta Tags -->*/}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Blog de joTas: Python & JavaScript" />
            <meta name="twitter:description" content={t('metaTags.p1')} />

            {/*< !--Meta Tags Generated via http://heymeta.com -->*/}

        </Helmet>
    )
}