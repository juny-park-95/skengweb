import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import ko from './dictionaries/ko';
import en from './dictionaries/en';

const DICTIONARIES = { ko, en };
const STORAGE_KEY = 'skeng-lang';
const SUPPORTED = ['ko', 'en'];
const DEFAULT_LANG = 'ko';

function detectInitialLang() {
  if (typeof window === 'undefined') return DEFAULT_LANG;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (SUPPORTED.includes(stored)) return stored;
  const browser = (navigator.language || '').toLowerCase();
  if (browser.startsWith('ko')) return 'ko';
  if (browser.startsWith('en')) return 'en';
  return DEFAULT_LANG;
}

const I18nContext = createContext({ lang: DEFAULT_LANG, t: DICTIONARIES[DEFAULT_LANG], setLang: () => {}, toggle: () => {} });

export function I18nProvider({ children }) {
  const [lang, setLang] = useState(detectInitialLang);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      toggle: () => setLang((l) => (l === 'ko' ? 'en' : 'ko')),
      t: DICTIONARIES[lang] || DICTIONARIES[DEFAULT_LANG],
    }),
    [lang]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  return useContext(I18nContext);
}
