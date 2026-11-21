---
name: Exoplanet Research Group Croatia
description: "Duboko nebo: tamna, mirna stranica s jednom toplom zvijezdom i tranzitom planeta"
colors:
  ink: "#0C0A18"
  deep: "#17132A"
  deep-raised: "#211B3A"
  line: "#2C2548"
  moonlight: "#F3EEF8"
  moonlight-soft: "#E2DCEC"
  lavender: "#A99FC6"
  halo: "#A898FF"
  starglow: "#FFD9A8"
  starglow-hover: "#FFE6C6"
  on-starglow: "#1A1208"
  star-core: "#FFF6E8"
  star-warm: "#FFE2B8"
  star-limb: "#F7B877"
typography:
  display:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "clamp(2.6rem, 6.4vw, 5.6rem)"
    fontWeight: 300
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  heading-2:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "clamp(2rem, 4vw, 3rem)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  heading-3:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "1.45rem"
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: "0em"
  body:
    fontFamily: "'Source Sans 3', system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "0em"
  small:
    fontFamily: "'Source Sans 3', system-ui, sans-serif"
    fontSize: "0.9rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0em"
  button:
    fontFamily: "'Source Sans 3', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0em"
rounded:
  pill: "999px"
  panel: "14px"
  circle: "50%"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
  3xl: "72px"
  section: "clamp(72px, 14vh, 140px)"
components:
  button-primary:
    backgroundColor: "{colors.starglow}"
    textColor: "{colors.on-starglow}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "12px 22px"
  button-primary-hover:
    backgroundColor: "{colors.starglow-hover}"
    textColor: "{colors.on-starglow}"
  button-ghost:
    textColor: "{colors.moonlight}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "12px 22px"
  placeholder:
    textColor: "{colors.lavender}"
    typography: "{typography.small}"
    rounded: "{rounded.pill}"
    padding: "6px 16px"
  nav:
    backgroundColor: "{colors.deep}"
    textColor: "{colors.lavender}"
    rounded: "{rounded.panel}"
    padding: "10px 16px"
---

# Design System: Exoplanet Research Group Croatia

Ovaj dokument je jedini izvor istine za boje, tipografiju, razmake i pokret. CSS implementira ove
tokene kao custom properties i ne uvodi nove vrijednosti. Ako nešto nedostaje, prvo se dopuni ovdje.

Odabrani smjer: **B, Duboko nebo** (korak 2, 2026-11-21). Izveden je iz ui-ux-pro-max izlaza
(Space Tech, Immersive/Interactive Experience, stil Aurora UI) i doređen prema smjernicama `frontend-design`.

## Overview

Stranica je noćno nebo s jednom toplom zvijezdom. Prvi ekran pokazuje ono čime se grupa bavi:
planet prolazi ispred zvijezde i njezin sjaj se na trenutak priguši. Sve ostalo je mirno, tamno i
čitljivo, a tekst stoji u jednom stupcu kao u dobro složenoj knjizi.

Samo tamni način rada. Svijetla tema ne postoji.

Ugođaj: miran, topao, atmosferski. Ne sci-fi, ne neon, ne "tech startup".

## Colors

### Primary
- **starglow `#FFD9A8`**: toplo svjetlo zvijezde. Glavni gumb i aktivni jezik. Koristi se štedljivo:
  najviše jedan element s ovom bojom po ekranu.

### Secondary
- **halo `#A898FF`**: lavandin halo. Poveznice u tekstu i fokus prsten (`:focus-visible`).

### Neutral
- **ink `#0C0A18`**: pozadina stranice (svemirska tinta).
- **deep `#17132A`**: podloge (navigacija, istaknuti blokovi).
- **deep-raised `#211B3A`**: podloga iznad `deep`.
- **line `#2C2548`**: tanke linije i rubovi.
- **moonlight `#F3EEF8`**: naslovi i glavni tekst.
- **moonlight-soft `#E2DCEC`**: dugi tekst (odlomci u Bazi znanja).
- **lavender `#A99FC6`**: prigušeni tekst, navigacija u mirovanju, placeholderi.

### Zvijezda (samo za ilustraciju)
- **star-core `#FFF6E8` → star-warm `#FFE2B8` → star-limb `#F7B877`**: radijalni gradijent zvijezde,
  rub prelazi u prozirnu toplu boju i zatim u `ink`. Te boje se ne koriste za tekst ni sučelje.

### Named Rules
- **Kontrast:** `moonlight` na `ink` 17,2:1, `lavender` na `ink` 7,9:1, `lavender` na `deep` 7,3:1,
  `halo` na `ink` 8,0:1. Svaki novi par mora imati najmanje 4,5:1.
- **Tekst nikad ne stoji na svjetlom dijelu zvijezde.** Zvijezda je iznad naslova, ne iza njega.

## Typography

- **Newsreader** (serif, os optičke veličine `opsz` 6–72): naslovi. Display koristi `opsz` 72 i težinu 300.
- **Source Sans 3**: sav ostali tekst, gumbi i navigacija.
- Obje obitelji imaju latin-ext podskup (č, ć, đ, š, ž).
- Učitavaju se samo korištene težine: Newsreader 300–600, Source Sans 3 400 i 600.

### Hierarchy
| Uloga | Font | Veličina | Težina | Prored |
|---|---|---|---|---|
| Display (h1) | Newsreader, opsz 72 | clamp(2.6rem, 6.4vw, 5.6rem) | 300 | 1.02 |
| h2 | Newsreader | clamp(2rem, 4vw, 3rem) | 400 | 1.1 |
| h3 | Newsreader | 1.45rem | 500 | 1.25 |
| Tekst | Source Sans 3 | 1.125rem | 400 | 1.7 |
| Sitno | Source Sans 3 | 0.9rem | 400 | 1.5 |
| Gumb | Source Sans 3 | 1rem | 600 | 1.2 |

### Named Rules
- Duljina retka teksta najviše 68ch.
- Bez velikih slova za oznake, bez naglašavanja jedne riječi u naslovu drugom bojom ili kurzivom.
- Rečenična velika slova (sentence case) u svim naslovima i gumbima na hrvatskom.

## Layout

- **Uvod (hero):** pozornica visine 220vh. Unutra je "nebo" visine 100vh zakvačeno (`position: sticky`)
  dok planet prelazi preko zvijezde. Zvijezda je u gornjem dijelu (središte na 31 % visine), a naslov,
  placeholder PH-01 i gumbi stoje centrirano u donjem dijelu.
- **Sadržaj:** jedan centrirani stupac, `width: min(68ch, 100% - 32px)`. Sekcije su odvojene razmakom
  `spacing.section`, bez kartica.
- **Navigacija:** plutajuća traka pri vrhu, najviše 1180px široka.
- **Mobitel (prijelom 860px):** bočni razmak 16px, bez vodoravnog skrolanja. U navigaciji ostaju logo
  i preklopnik jezika. Obrazac za ostale poveznice na mobitelu određuje se u koraku 3 (struktura).

## Elevation & Depth

Dubinu daje svjetlo, ne sjene:
- korona zvijezde (širok, vrlo blag radijalni sjaj: `starglow` na 16 % i `halo` na 10 % prozirnosti);
- naslov u uvodu ima `text-shadow: 0 2px 40px rgba(12,10,24,.55)`;
- navigacija: `deep` na 55 % prozirnosti, `backdrop-filter: blur(14px)`, rub `lavender` na 15 %.

Nema sjena ispod blokova i nema gradijentnih pozadina sekcija.

## Shapes

- Gumbi i placeholderi: puni zaobljeni oblik (`rounded.pill`).
- Navigacija: `rounded.panel` (14px).
- Zvijezda i planet: krugovi. Planet je `ink` s tankim rubom `starglow` na 25 %.
- Placeholderi imaju isprekidan rub (`1px dashed lavender`) i uvijek nose oznaku, npr. "PH-01: …".

## Components

### Buttons
- **Primarni:** `starglow` podloga, `on-starglow` tekst. Hover `starglow-hover`, prijelaz 0,25 s.
- **Sekundarni (ghost):** rub `moonlight` na 30 %, podloga `ink` na 40 %. Hover: rub `moonlight`.
- Natpis kaže što se događa ("Što radimo", "Kako se uključiti"), bez strelica.

### Navigation
- Stavke: O grupi, Što radimo, Uključi se, Servisi, Baza znanja, Kontakt. U mirovanju `lavender`, hover `moonlight`.
- Preklopnik jezika "HR / EN": aktivni jezik u `starglow`.

### Placeholder
- Vidljiv, isprekidan, s oznakom PH-xx iz `SADRZAJ.md`. Ne smije izgledati kao gotov sadržaj.

### Tranzit (potpisna komponenta)
Jedini "veliki" pokret na stranici.
- **Pojava pri učitavanju:** zvijezda i korona se pojavljuju i lagano povećaju (`opacity 0→1`,
  `scale .92→1`), trajanje 2,4 s (korona 3 s), easing `cubic-bezier(.2,.7,.2,1)`.
- **Disanje:** zvijezda se sporo širi i skuplja (`scale 1→1.025`), 8 s, `ease-in-out`, beskonačno.
- **Prolaz vezan uz skrolanje:** dok posjetitelj skrola kroz pozornicu, planet prelazi slijeva nadesno
  (raspon `min(130vmin, 1200px)`). Kad je planet ispred zvijezde, njezin sjaj padne najviše 12 %, a korona
  oslabi. Izračun ide kroz `requestAnimationFrame`, a skrolanje sluša pasivni listener.
- **Smanjeno kretanje (`prefers-reduced-motion: reduce`):** nema animacija ni zakvačene pozornice.
  Planet stoji statično pokraj zvijezde.

### Ostali prijelazi
- Hover i fokus: 0,2–0,25 s, samo boja i rub. Sekcije se ne animiraju pri skrolanju.

## Do's and Don'ts

### Do:
- Drži zvijezdu kao jedini svjetli element na ekranu.
- Ostavi puno tamnog prostora; tekst u jednom stupcu.
- Uvijek pokaži vidljiv fokus (`halo`, 2px, odmak 3px).
- Placeholdere drži vidljivima dok grupa ne pošalje sadržaj.

### Don't:
- Šareni aurora ili mesh gradijenti, neon, zvjezdana polja s treptanjem.
- Staklo (glassmorphism) izvan navigacije.
- Fade-up animacije na svakoj sekciji, hover animacije na svemu.
- Kartice sa sjenom za svaki sadržaj, numerirani markeri (01/02/03) bez stvarnog redoslijeda.
- Tekst preko svijetlog dijela zvijezde.
- Bilo kakve tvrdnje o grupi koje nisu u `SADRZAJ.md` ili PRODUCT.md.
