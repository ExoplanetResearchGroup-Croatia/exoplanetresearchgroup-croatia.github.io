---
name: ERG Croatia
description: "Duboko nebo: tamna, mirna stranica s jednom toplom zvijezdom i tranzitom planeta"
colors:
  ink: "#0C0A18"
  deep: "#17132A"
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
  glass: "rgb(23 19 42 / 0.85)"
  glass-edge: "rgb(169 159 198 / 0.15)"
  ghost-edge: "rgb(243 238 248 / 0.3)"
  ghost-fill: "rgb(12 10 24 / 0.4)"
  ph-fill: "rgb(12 10 24 / 0.5)"
  corona-warm: "rgb(255 217 168 / 0.16)"
  corona-halo: "rgb(168 152 255 / 0.1)"
  planet-rim: "rgb(255 217 168 / 0.25)"
  limb-fade: "rgb(247 184 119 / 0.35)"
  draft-edge: "rgb(255 217 168 / 0.35)"
typography:
  display:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "clamp(2.6rem, 6.4vw, 5.6rem)"
    fontWeight: 300
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "clamp(2.4rem, 5vw, 3.8rem)"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.015em"
  heading-2:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "clamp(2rem, 4vw, 3rem)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  heading-article:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "1.75rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.005em"
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
  nav:
    fontFamily: "'Source Sans 3', system-ui, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0em"
  menu:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "2rem"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "0em"
rounded:
  pill: "999px"
  panel: "14px"
  focus: "4px"
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
  site-header:
    backgroundColor: "{colors.glass}"
    textColor: "{colors.lavender}"
    rounded: "{rounded.panel}"
    padding: "8px 16px"
---

# Design System: ERG Croatia (Exoplanet Research Group Croatia)

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
- **starglow `#FFD9A8`**: toplo svjetlo zvijezde. Samo primarni gumb. Najviše jedan element s ovom
  bojom po ekranu (zato aktivni jezik i hover u izborniku nisu u `starglow`).

### Secondary
- **halo `#A898FF`**: lavandin halo. Poveznice u tekstu i fokus prsten (`:focus-visible`).

### Neutral
- **ink `#0C0A18`**: pozadina stranice (svemirska tinta).
- **deep `#17132A`**: podloge (navigacija, istaknuti blokovi).
- **line `#2C2548`**: tanke linije i rubovi.
- **moonlight `#F3EEF8`**: naslovi i glavni tekst.
- **moonlight-soft `#E2DCEC`**: dugi tekst (odlomci u Bazi znanja).
- **lavender `#A99FC6`**: prigušeni tekst, navigacija u mirovanju, placeholderi.

### Zvijezda (samo za ilustraciju)
- **star-core `#FFF6E8` → star-warm `#FFE2B8` → star-limb `#F7B877`**: radijalni gradijent zvijezde,
  rub prelazi u prozirnu toplu boju i zatim u `ink`. Te boje se ne koriste za tekst ni sučelje.

### Prozirne boje (alfa tokeni)
Sve prozirne boje su imenovani tokeni u `rgb(r g b / a)` obliku, bez `color-mix()`, kako bi radile i u
starijim preglednicima: `glass` (deep 85 %), `glass-edge` (lavender 15 %), `ghost-edge` (moonlight 30 %),
`ghost-fill` (ink 40 %), `ph-fill` (ink 50 %), `corona-warm` (starglow 16 %), `corona-halo` (halo 10 %),
`planet-rim` (starglow 25 %), `limb-fade` (star-limb 35 %), `draft-edge` (starglow 35 %).

### Named Rules
- **Kontrast:** `moonlight` na `ink` 17,2:1, `lavender` na `ink` 7,9:1, `lavender` na `deep` 7,3:1,
  `halo` na `ink` 8,0:1. Svaki novi par mora imati najmanje 4,5:1.
- **Tekst nikad ne stoji na svjetlom dijelu zvijezde.** Zvijezda je iznad naslova, ne iza njega.

## Typography

- **Newsreader** (serif, os optičke veličine `opsz` 6–72): naslovi. Display koristi `opsz` 72 i težinu 300.
- **Source Sans 3**: sav ostali tekst, gumbi i navigacija.
- Fontovi se poslužuju lokalno, osi težine sužene na korišteno: Newsreader 300–600 (+ `opsz` 6–72),
  Source Sans 3 400–600. Po obitelji tri datoteke: `latin`, mali `hr` podskup (Č č Ć ć Đ đ Š š Ž ž)
  i `latin-ext` za ostala proširena slova, svaka sa svojim `unicode-range`.

### Hierarchy
| Uloga | Font | Veličina | Težina | Prored |
|---|---|---|---|---|
| Display (h1 početne) | Newsreader, opsz 72 | clamp(2.6rem, 6.4vw, 5.6rem) | 300 | 1.02 |
| Puni naziv ispod h1 | Newsreader, `lavender` | 1.45rem | 400 | 1.25 |
| Uvodna rečenica (lede) | Source Sans 3, `moonlight-soft`, najviše 34ch | 1.25rem | 400 | 1.5 |
| Title (h1 vodiča) | Newsreader | clamp(2.4rem, 5vw, 3.8rem) | 400 | 1.08 |
| h2 (sekcije početne) | Newsreader | clamp(2rem, 4vw, 3rem) | 400 | 1.1 |
| h2 u vodiču | Newsreader | 1.75rem | 500 | 1.2 |
| h3 | Newsreader | 1.45rem | 500 | 1.25 |
| Tekst | Source Sans 3 | 1.125rem | 400 | 1.7 |
| Sitno | Source Sans 3 | 0.9rem | 400 | 1.5 |
| Gumb | Source Sans 3 | 1rem | 600 | 1.2 |
| Navigacija | Source Sans 3 | 0.95rem | 400 | 1.4 |
| Izbornik (mobitel) | Newsreader | 2rem | 400 | 1.2 |

### Named Rules
- Duljina retka teksta najviše 68ch.
- Bez velikih slova za oznake, bez naglašavanja jedne riječi u naslovu drugom bojom ili kurzivom.
- Rečenična velika slova (sentence case) u svim naslovima i gumbima na hrvatskom.

## Layout

- **Uvod (hero):** pozornica visine 160vh (150vh na mobitelu), samo kad radi JavaScript. Unutra je
  "nebo" najmanje 100svh visoko (raste sa sadržajem pri povećanom tekstu) i zakvačeno
  (`position: sticky`) dok planet prelazi preko zvijezde. Zvijezda je u gornjem redu mreže, a naslov,
  placeholder PH-01 i gumbi stoje centrirano u donjem redu. Na niskim ekranima (`max-height: 40em`)
  i bez JavaScripta pozornica se ne kvači.
- **Sadržaj:** jedan centrirani stupac, `width: min(68ch, 100% - 32px)`. Sekcije su odvojene razmakom
  `spacing.section`, bez kartica.
- **Navigacija:** plutajuća traka pri vrhu, najviše 1180px široka.
- **Mobitel i tablet (prijelom 1000px):** bočni razmak 16px, bez vodoravnog skrolanja. U traci ostaju
  logo, preklopnik jezika i gumb "Izbornik"; izbornik se otvara preko cijelog ekrana i skrola se ako ne
  stane. Ciljevi dodira najmanje 44px visine.

## Elevation & Depth

Dubinu daje svjetlo, ne sjene:
- korona zvijezde (širok, vrlo blag radijalni sjaj: `starglow` na 16 % i `halo` na 10 % prozirnosti);
- navigacija: `glass` (deep na 85 %), `backdrop-filter: blur(14px)`, rub `glass-edge`. 85 % je
  potrebno da tekst navigacije zadrži 4,5:1 i kad je ispod nje svjetla zvijezda.

Nema sjena ispod blokova i nema gradijentnih pozadina sekcija.

## Shapes

- Gumbi i placeholderi: puni zaobljeni oblik (`rounded.pill`).
- Navigacija: `rounded.panel` (14px).
- Zvijezda i planet: krugovi. Planet je `ink` s tankim rubom `starglow` na 25 %.
- Placeholderi imaju isprekidan rub (`1px dashed lavender`) i uvijek nose oznaku, npr. "PH-01: …".
  Kratki (jedan redak) su `rounded.pill`, a blok-placeholderi za odlomke i popise `rounded.panel`.
  Placeholder strukture (PH-05) pokazuje razine: društvo, a uvučeno ispod njega članovi.

## Components

### Buttons
- **Primarni:** `starglow` podloga, `on-starglow` tekst. Hover `starglow-hover`, prijelaz 0,25 s.
  Jedan po ekranu: "Što radimo" u uvodu, "Javi se" na kraju sekcije "Kako se uključiti".
- **Sekundarni (ghost):** rub `ghost-edge`, podloga `ghost-fill`. Hover: rub `moonlight`.
- Natpis kaže što se događa ("Što radimo", "Kako se uključiti"), bez strelica.

### Poveznice
- U tekstu: `halo`, podcrtano. Naslovi u popisima poveznica (servisi, vodiči): `moonlight`, podcrtano
  u `halo`, hover `halo`.
- Vanjske poveznice (nova kartica): mala nacrtana ikona "izlaz" (SVG maska, boja teksta) iza naziva
  i tekst za čitače ekrana "(otvara se u novoj kartici)".

### Logo
- U zaglavlju: znak iz loga (planet s prstenom, bez natpisa) na plavoj podlozi loga, krug 32px
  (`assets/logo-mark.png`, 96px za oštrinu). Uz znak tekst "ERG Croatia".
- Boje loga (#132B76, #ADD0EC) pripadaju samo logu i ne koriste se u sučelju.

### Navigation
- Stavke: O grupi, Što radimo, Uključi se, Servisi, Baza znanja, Kontakt. U mirovanju `lavender`, hover `moonlight`.
  Na stranicama vodiča "Baza znanja" je označena kao trenutna (`aria-current`, `moonlight`, podcrtano).
- Preklopnik jezika "HR / EN": aktivni jezik `moonlight`, podcrtan.
- Izbornik na mobitelu: poveznice u `menu` stilu, `moonlight`, hover `halo`.

### Društva i članovi
- Popis bez kartica, stavke odvojene tankim linijama (`line`). Društvo: Newsreader 500, 1.45rem, `moonlight`,
  uz njega grad u `lavender` (sitno). Ispod društva članovi: ime u `moonlight-soft`, uloga desno u `lavender` (sitno).
- Vanjske poveznice (web društva, osobne stranice) imaju ikonu vanjske poveznice.

### Placeholder
- Vidljiv, isprekidan, s oznakom PH-xx iz `SADRZAJ.md`. Ne smije izgledati kao gotov sadržaj.

### Tranzit (potpisna komponenta)
Jedini "veliki" pokret na stranici.
- **Pojava pri učitavanju:** zvijezda, korona i planet se pojačaju i lagano povećaju iz već vidljivog
  stanja (`opacity .25→1`, `scale .96→1`), trajanje 2,4 s, eksponencijalni ease-out
  `cubic-bezier(.16,1,.3,1)` (token `--ease-out`).
- **Smještaj:** zvijezda ima svoj red u mreži uvoda iznad naslova i veličinu
  `min(40vmin, 380px, 78 % visine tog reda)`, pa nikad ne dolazi pod naslov, ni na niskim ekranima.
- **Disanje:** zvijezda se sporo širi i skuplja (`scale 1→1.025`), 8 s, `ease-in-out`, beskonačno.
- **Prolaz vezan uz skrolanje:** dok posjetitelj skrola kroz pozornicu, planet prelazi slijeva nadesno
  od 20 % do 80 % raspona `min(110vmin, 1100px)`. Kad je planet ispred zvijezde, njezin sjaj padne
  najviše 20 %, a korona oslabi. Kad pozornica izlazi s ekrana, zvijezda i korona izblijede, da ne
  prođu ispod navigacije. Izračun ide kroz `requestAnimationFrame` uz pasivni listener; kad uvod nije
  na ekranu, "disanje" se pauzira.
- **Smanjeno kretanje (`prefers-reduced-motion: reduce`):** nema animacija ni zakvačene pozornice.
  Planet stoji statično pokraj zvijezde.

### Ostali prijelazi
- Hover i fokus: 0,2–0,25 s, samo boja i rub. Sekcije se ne animiraju pri skrolanju.
- Izbornik na mobitelu: sloj se pojavljuje kroz `opacity` i `clip-path` krug koji se širi iz gumba
  (0,45 s, `--ease-out`). Uz smanjeno kretanje se pojavljuje bez prijelaza.

### Površine preglednika
- Označeni tekst: podloga `halo`, tekst `ink`. Kursor (`caret-color`): `starglow`.
- Scrollbar: `line` na `ink`. Podcrtavanje poveznica: odmak 0,2em, debljina 1px.

## Do's and Don'ts

### Do:
- Drži zvijezdu kao jedini svjetli element na ekranu.
- Ostavi puno tamnog prostora; tekst u jednom stupcu.
- Uvijek pokaži vidljiv fokus (`halo`, 2px, odmak 3px, `rounded.focus`).
- Placeholdere drži vidljivima dok grupa ne pošalje sadržaj.

### Don't:
- Šareni aurora ili mesh gradijenti, neon, zvjezdana polja s treptanjem.
- Staklo (glassmorphism) izvan navigacije.
- Fade-up animacije na svakoj sekciji, hover animacije na svemu.
- Kartice sa sjenom za svaki sadržaj, numerirani markeri (01/02/03) bez stvarnog redoslijeda.
- Tekst preko svijetlog dijela zvijezde.
- Bilo kakve tvrdnje o grupi koje nisu u `SADRZAJ.md` ili PRODUCT.md.
