import i18next from 'i18next';
import * as translationEs from './locales/es/es.json';
import * as translationEn from './locales/en/en.json';

const RESOURCES = [
  { ns: 'front', lang: 'es', bundle: translationEs },
  { ns: 'front', lang: 'en', bundle: translationEn },
];

i18next.init({
  partialBundledLanguages: true,
  ns: ['front'],
  resources: {},
  defaultNS: 'front',
  fallbackLng: 'es',
  supportedLngs: ['es', 'en'],
});

RESOURCES.forEach(({ ns, lang, bundle }) => {
  i18next.addResourceBundle(lang, ns, bundle);
});

export default i18next;
