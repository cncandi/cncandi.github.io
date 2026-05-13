'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'
import de from '@/translations/de.json'
import en from '@/translations/en.json'

export type Lang = 'de' | 'en'

type Translations = typeof de

const translations: Record<Lang, Translations> = { de, en }

interface I18nContextType {
  lang: Lang
  setLang: (l: Lang) => void
  t: Translations
}

const I18nContext = createContext<I18nContextType>({
  lang: 'de',
  setLang: () => {},
  t: de,
})

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('de')
  return (
    <I18nContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  return useContext(I18nContext)
}
