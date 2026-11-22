# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Statički HTML/CSS/JS, bez frameworka i bez build koraka (odluka korisnika, 2026-11-21).
Hosting: GitHub Pages, repo `ExoplanetResearchGroup-Croatia/exoplanetresearchgroup-croatia.github.io`,
objava iz grane `main`, root. Trenutni URL: https://exoplanetresearchgroup-croatia.github.io/.
Custom domena je planirana, ali još nije kupljena (kad stigne: datoteka `CNAME` + DNS zapisi).

## Users

- **Amateri astronomi** s vlastitom opremom, koji bi se mogli uključiti u rad grupe.
- **Studenti** koji bi se htjeli uključiti.
- **Javnost i mediji**: zainteresirani laici i novinari koji žele znati tko je grupa i što radi.

Profesionalni astronomi nisu označeni kao primarna publika.

## Product Purpose

Web stranica istraživačke grupe Exoplanet Research Group Croatia. Zamjenjuje sadašnju "coming soon" stranicu.

Glavni cilj posjetitelja je **upoznati grupu i njezin rad**: tko je grupa i čime se bavi.
Uz to stranica pokazuje amaterima i studentima kako se uključiti, nudi korisne servise i bazu znanja
te kontakt.

Uspjeh: posjetitelj nakon posjeta zna tko je grupa i što radi. Amater ili student zna kako se uključiti
i kome se javiti.

## Positioning

Hrvatska grupa koja spaja vlastita opažanja tranzita egzoplaneta, analizu i modeliranje podataka te
edukaciju, a otvorena je amaterima i studentima. Druge razlike u odnosu na slične grupe nisu potvrđene.

## Operating Context

Djelatnosti grupe (potvrđeno):
- opažanja tranzita egzoplaneta;
- analiza i modeliranje podataka;
- edukacija i outreach.

Detalji (oprema, softver, mete, lokacija, aktivnosti) nisu poznati i ostaju placeholderi u `SADRZAJ.md`.

Vanjski servisi na koje stranica upućuje: Exoplanet Transit Database (https://var.astro.cz/en/Exoplanets),
ExoClock, NASA Exoplanet Archive. Grupa ima i vlastite alate, ali koji su to, još nije poznato (placeholder).

## Capabilities and Constraints

Potvrđene sekcije:
1. O grupi i članovima (članovi su organizirani po astronomskim društvima: društvo, a ispod njega njegovi članovi)
2. Što radimo
3. Kako se uključiti
4. Servisi / korisne poveznice (ETD, ExoClock, NASA Exoplanet Archive, vlastiti alati grupe)
5. Baza znanja: vodič za opažanje, obrada podataka, osnove egzoplaneta
6. Kontakt

Ponuđeno, ali nije odabrano (ne dodavati bez pitanja): oprema/opservatorij, rezultati opažanja,
novosti/događanja, galerija.

Jezici: hrvatski i engleski, s preklopnikom jezika. Izvorni tekst je hrvatski. Englesku verziju radi
Claude i označava je za provjeru.

Tekstovi:
- Baza znanja: Claude piše nacrte iz općeg znanja, označene kao "nacrt, za provjeru". Sve što je
  specifično za grupu (softver, oprema, postupci) ostaje placeholder.
- Sav ostali sadržaj o grupi dolazi od grupe. Do tada stoji jasno označen placeholder.
- Popis svih placeholdera: `SADRZAJ.md` (izvor) i `.docx` verzija za slanje na popunjavanje.

Otvoreno: tekst o grupi, popis društava i njihovih članova, kontakt e-mail, vlastiti alati grupe, custom domena.

## Brand Commitments

- Naziv: **ERG Croatia** (od 2026-11-22; zaglavlje, h1, `<title>`, podnožje, OG slika). Puni naziv
  **Exoplanet Research Group Croatia** stoji ispod h1 i u opisu stranice. GitHub organizacija
  `ExoplanetResearchGroup-Croatia` (ranije ETD-Croatia).
- Logo (2026-11-22): planet s prstenom i natpis "ERG Croatia", svijetloplavo (#ADD0EC) na plavom
  (#132B76). Puni logo: `assets/logo.jpg`; znak bez natpisa za zaglavlje: `assets/logo-mark.png`;
  favicon iz istog znaka.
- Vizualno ograničenje koje je zadao korisnik: moderna, glatka, tamna stranica s animacijama.
  Ostatak vizualnog smjera dolazi u DESIGN.md.

## Evidence on Hand

- `assets/logo.jpg` (logo ERG Croatia), `assets/logo-mark.png`, `assets/favicon.png`.
- Poveznica na Exoplanet Transit Database sa sadašnje stranice.
- Nema: teksta o grupi, popisa društava i članova, fotografija, kontakt e-maila, rezultata ni publikacija.
  Ne izmišljati članove, broj opažanja, publikacije, suradnje, lokacije, opremu ni citate.

## Product Principles

1. **Samo potvrđene činjenice.** Sve što nije potvrđeno ostaje vidljiv placeholder, a ne uvjerljiv izmišljeni tekst.
2. **Grupa i njezin rad na prvom mjestu.** Posjetitelj u nekoliko sekundi treba shvatiti tko je grupa i čime se bavi.
3. **Put do uključivanja uvijek na vidiku.** Amater ili student uvijek zna sljedeći korak.
4. **Dva ravnopravna jezika.** HR i EN verzija nose isti sadržaj.
5. **Jednostavno održavanje.** Statičke datoteke bez build koraka, sadržaj se mijenja na jednom mjestu.
