# Design of Chronhr:

## Plan
- Color Pallet
- Police


## Standard

**Police**
IBM Plex Sans — institutionnel, carré, zéro arrondi. Conçu à la base par IBM pour les interfaces techniques. Parfait pour AML.


**Couleurs**
- `#F7F6F2` Cream — fond principal. Plus chaud qu'un blanc pur `#FFFFFF`, réduit la fatigue visuelle pour des analystes qui passent des heures sur l'écran
- `#0F1117` Ink — noir légèrement bleuté, plus élégant qu'un noir absolu `#000000`
- `#84827D` Muted — gris chaud pour tout le texte secondaire. Même température que le cream, cohérence
- `#E2E0D9` Stone — bordures et lignes de séparation. Très discret, structure sans bruit visuel


**Graisse**
- **700** — H1, H2, stats, logo
- **600** — boutons, eyebrow labels, numéros de section
- **400** — body text, liens nav
- **300 italic** — accents dans les titres (`em`), crée du contraste sans changer de couleur


**Tailles clés**
- H1 — `clamp(2.8rem, 4.2vw, 4.4rem)` — s'adapte au viewport
- Body — `1rem` / line-height `1.75`
- Labels — `0.68rem` uppercase avec `letter-spacing 0.2em`
