# cnc-technik.de — New Website

Next.js 14 · TypeScript · Tailwind CSS · Static Export · GitHub Pages

## Lokale Entwicklung

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Build & Deploy

Push auf `main` löst automatisch den GitHub Actions Workflow aus.
Die Seite wird nach `gh-pages` deployed und ist unter
`https://cncandi.github.io/website/` erreichbar.

### GitHub Pages einrichten (einmalig)

1. Repository Settings → Pages
2. Source: **GitHub Actions** auswählen
3. Workflow wird beim nächsten Push ausgeführt

## Struktur

```
src/
├── app/
│   ├── layout.tsx       # Root Layout, Fonts, I18n Provider
│   ├── globals.css      # Tailwind + Custom CSS
│   └── page.tsx         # Startseite
├── components/
│   ├── Header.tsx       # Navigation + Sprachumschalter
│   ├── Hero.tsx         # Hero Section
│   ├── StatsBar.tsx     # Kennzahlen-Leiste
│   ├── ProductGrid.tsx  # Produktkacheln
│   ├── SolutionsSection.tsx
│   ├── NewsSection.tsx
│   ├── CTASection.tsx
│   └── Footer.tsx
├── lib/
│   └── i18n.tsx         # Sprach-Context (DE/EN)
└── translations/
    ├── de.json
    └── en.json
```

## Bilder ersetzen

Alle Bild-Platzhalter befinden sich in den Komponenten als `<div>` mit
Hinweistext. Eigene Bilder unter `public/images/` ablegen und mit
`<Image src="/images/dateiname.jpg" ... />` einbinden.

Für die `basePath`-kompatible Variante:
```tsx
import Image from 'next/image'
<Image src="/images/hero.jpg" alt="..." width={800} height={600} />
```

## Seitenstruktur (geplant)

- `/` Startseite
- `/produkte/sprutcam-ency`
- `/produkte/p3d-slicer`
- `/produkte/solidworks`
- `/produkte/delmia-catia`
- `/loesungen/cnc`
- `/loesungen/roboter`
- `/loesungen/5-achs`
- `/loesungen/cad`
- `/service`
- `/news`
- `/ueber-uns`
- `/kontakt`
- `/demo`
- `/impressum`
- `/datenschutz`
- `/agb`
