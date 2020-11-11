import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'
import global_es from './translations/es/global.json'
import global_en from './translations/en/global.json'
import global_de from './translations/de/global.json'
import global_ja from './translations/ja/global.json'
import global_zh from './translations/zh/global.json'
import global_hi from './translations/hi/global.json'
import global_pt from './translations/pt/global.json'
import global_it from './translations/it/global.json'
import global_ru from './translations/ru/global.json'
import global_fr from './translations/fr/global.json'

const listedLanguages = ['es', 'en', 'fr', 'it', 'pt', 'de', 'ru', 'hi', 'ja', 'zh']
let language = navigator.language.split('-')[0]

if (!listedLanguages.includes(language)) {
  language = 'en'
}

i18next.init({
  interpolation: { escapeValue: false },
  lng: language,
  resources: {
    //iso 639-1
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
    },
    ja: {
      global: global_ja,
    },
    zh: {
      global: global_zh,
    },
    ru: {
      global: global_ru,
    },
    hi: {
      global: global_hi,
    },
    pt: {
      global: global_pt,
    },
    it: {
      global: global_it,
    },
    fr: {
      global: global_fr,
    },
    de: {
      global: global_de,
    }
  }
})

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
