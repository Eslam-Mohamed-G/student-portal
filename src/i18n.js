import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from "./locales/en/translation.json";
import ar from "./locales/ar/translation.json";
import LanguageDetector  from 'i18next-browser-languagedetector';

i18n.use(LanguageDetector )
    .use(initReactI18next)
    .init({
        resources:{
            en:{translation: en},
            ar:{translation: ar},
        }, 
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        },
        detection: {
          order: ['localStorage', 'navigator'],
          caches: ['localStorage'],
        }
    });

export default i18n;
