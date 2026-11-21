# Struktura stranice (brief iz koraka 3)

Izvori: PRODUCT.md (sadržaj i pravila), DESIGN.md (izgled), SADRZAJ.md (placeholderi PH-xx).
Ovo je brief bez koda. Vizualne vrijednosti ovdje se ne definiraju, njih daje DESIGN.md.

## 1. Posao i publika

- Amateri astronomi, studenti, javnost i mediji.
- Početna: posjetitelj **upoznaje grupu i njezin rad**. Vodiči u Bazi znanja služe za **čitanje i učenje**.

## 2. Ishod

- U prvom ekranu: ime grupe, opis u jednoj rečenici (PH-01) i dva puta dalje: "Što radimo" i "Kako se uključiti".
- Skrolanjem posjetitelj redom saznaje tko je grupa, što radi i kako se uključiti.
- Kontakt i "Uključi se" su uvijek dostupni kroz navigaciju.

## 3. Smjer

DESIGN.md, smjer B "Duboko nebo". Jedini veliki pokret je tranzit u uvodu početne stranice.
Vodiči u Bazi znanja nemaju animirani uvod.

## 4. Opseg: datoteke

| Put | Sadržaj |
|---|---|
| `/index.html` | Početna, HR |
| `/en/index.html` | Početna, EN |
| `/baza-znanja/opazanje.html` | Vodič za opažanje, HR |
| `/baza-znanja/obrada-podataka.html` | Obrada podataka, HR |
| `/baza-znanja/osnove.html` | Osnove egzoplaneta, HR |
| `/en/knowledge-base/observing.html` | Observing guide, EN |
| `/en/knowledge-base/data-reduction.html` | Data reduction, EN |
| `/en/knowledge-base/basics.html` | Exoplanet basics, EN |
| `/assets/css/site.css` | Jedan stylesheet, implementira tokene iz DESIGN.md |
| `/assets/js/site.js` | Izbornik na mobitelu, tranzit u uvodu |
| `/assets/logo.jpg`, `/assets/favicon.png` | Postojeći (privremeni logo) |
| `/assets/fonts/` | Newsreader i Source Sans 3, woff2, lokalno |
| `/assets/og.jpg` | Slika za dijeljenje poveznice (JPEG, ~50 KB) |
| `/404.html` | Stranica za nepostojeće adrese |
| `/_config.yml` | Isključuje interne datoteke (PRODUCT.md, DESIGN.md, SADRZAJ.md, STRUKTURA.md) iz objave |

Zaglavlje i podnožje ponavljaju se u svakoj HTML datoteci (nema build koraka).

## 5. Početna: redoslijed sekcija

```
DESKTOP (>= 860px)                                  MOBITEL (< 860px)
+--------------------------------------------------+  +------------------------+
| (logo)  O grupi Što radimo Uključi se Servisi    |  | (logo)  HR/EN Izbornik |
|         Baza znanja Kontakt          HR / EN     |  +------------------------+
+--------------------------------------------------+  |        .-"-.           |
|                    .-"""-.                       |  |   o-> ( * )            |
|          o ---->  ( ZVIJEZDA )                   |  |        '-'             |
|                    '-...-'                       |  |  Exoplanet Research    |
|          Exoplanet Research Group Croatia        |  |  Group Croatia         |
|                    [PH-01]                       |  |  [PH-01]               |
|        (Što radimo)  (Kako se uključiti)         |  |  (Što radimo)          |
+--------------------------------------------------+  |  (Kako se uključiti)   |
|              O grupi i članovima                 |  +------------------------+
|   [PH-02 opis] [PH-03 povijest] [PH-04 cilj]     |  | sekcije jedna ispod    |
|   Članovi: ime / uloga / ustanova / poveznica    |  | druge, isti redoslijed |
|              Što radimo                          |  |                        |
|   | Opažanja tranzita      [PH-06]               |  |                        |
|   | Analiza i modeliranje  [PH-07]               |  |                        |
|   | Edukacija i outreach   [PH-08]               |  |                        |
|              Kako se uključiti                   |  |                        |
|   Tko [PH-09]  Što treba [PH-10]  Prvi korak [PH-11]  (Javi se -> Kontakt)  |
|              Servisi i korisne poveznice         |  |                        |
|   ETD / ExoClock / NASA Exoplanet Archive        |  |                        |
|   Naši alati [PH-12]                             |  |                        |
|              Baza znanja                         |  |                        |
|   3 poveznice na vodiče (naslov + 1 rečenica)    |  |                        |
|              Kontakt                             |  |                        |
|   e-mail [PH-16]   društvene mreže [PH-17]       |  |                        |
+--------------------------------------------------+  +------------------------+
| © godina Exoplanet Research Group Croatia        |
+--------------------------------------------------+
```

Sve sekcije su u jednom centriranom stupcu (68ch), bez kartica.

| # | Sekcija (sidro) | Sadržaj |
|---|---|---|
| 0 | Navigacija | Logo (vodi na početnu), O grupi, Što radimo, Uključi se, Servisi, Baza znanja, Kontakt, HR / EN |
| 1 | Uvod | h1 ime grupe, PH-01, gumbi "Što radimo" (#sto-radimo) i "Kako se uključiti" (#ukljuci-se), tranzit |
| 2 | O grupi i članovima (#o-grupi) | PH-02 opis, PH-03 povijest, PH-04 cilj; popis članova PH-05 |
| 3 | Što radimo (#sto-radimo) | Tri djelatnosti: PH-06, PH-07, PH-08 |
| 4 | Kako se uključiti (#ukljuci-se) | PH-09 tko, PH-10 što treba, PH-11 prvi korak; poveznica "Javi se" na #kontakt |
| 5 | Servisi i korisne poveznice (#servisi) | ETD, ExoClock, NASA Exoplanet Archive (naziv, opis u jednoj rečenici, poveznica); vlastiti alati PH-12 |
| 6 | Baza znanja (#baza-znanja) | Rečenica uvoda i tri poveznice na vodiče |
| 7 | Kontakt (#kontakt) | E-mail PH-16 kao `mailto:` poveznica; društvene mreže PH-17 |
| 8 | Podnožje | © godina, ime grupe |

## 6. Vodič u Bazi znanja (predložak)

```
+--------------------------------------------------+
| (logo)  navigacija ...                 HR / EN   |
+--------------------------------------------------+
|  Baza znanja / Vodič za opažanje                 |  <- put natrag
|  h1 Vodič za opažanje                            |
|  "Nacrt, za provjeru"                            |
|  h2 ...  tekst u stupcu 68ch                     |
|  [PH-13 / PH-14 / PH-15 gdje treba podatak grupe]|
|  ----------------------------------------------  |
|  Ostali vodiči: Obrada podataka, Osnove          |
+--------------------------------------------------+
```

Okvirni sadržaj nacrta (opće znanje, za provjeru):
- **Osnove egzoplaneta:** što je egzoplanet, kako se otkrivaju, što je tranzit, što se iz tranzita može saznati.
- **Vodič za opažanje:** odabir mete i termina (PH-14), oprema (PH-13), postav i snimanje, kalibracijske snimke, koliko dugo snimati prije i poslije tranzita.
- **Obrada podataka:** kalibracija, fotometrija, usporedne zvijezde, prilagodba modela, slanje rezultata (PH-15).

## 7. Stanja i rasponi

- **Placeholderi:** vidljivi, isprekidani, s oznakom PH-xx dok grupa ne pošalje sadržaj.
- **Neobavezna polja** (PH-17, poveznice članova): ako ostanu prazna, element se ne prikazuje.
- **Članovi:** 1 do 20 redaka, duga imena i ustanove se prelamaju.
- **Vlastiti alati:** 0 do 5; ako ih nema, podsekcija "Naši alati" se ne prikazuje.
- **Bez JavaScripta:** sve poveznice rade, uvod je statičan, a na mobitelu su poveznice izbornika prikazane kao obična lista.
- **Smanjeno kretanje:** bez animacija i bez zakvačenog uvoda (DESIGN.md).

## 8. Ponašanje

- **Izbornik na mobitelu:** gumb "Izbornik" otvara sloj preko cijelog ekrana. Fokus ostaje unutar sloja,
  Esc i "Zatvori" ga zatvaraju, a dodir na poveznicu ga zatvara i vodi na sekciju.
- **Preklopnik jezika:** vodi na istu stranicu u drugom jeziku. Svaka stranica ima `lang` i `hreflang` poveznice.
- **Sidra:** glatko skrolanje do sekcije (isključeno uz smanjeno kretanje).
- **Vanjske poveznice** (servisi) otvaraju se u novoj kartici, uz tekst za čitače ekrana "(otvara se u novoj kartici)".

## 9. Ograničenja i otvorene odluke

- GitHub Pages, statički HTML/CSS/JS, bez build koraka.
- Opisi ETD-a, ExoClocka i NASA Exoplanet Archivea u jednoj rečenici: piše ih Claude, za provjeru.
- EN tekstovi: prijevod Claudea, za provjeru.
- **Odlučeno (2026-11-22):**
  - fontovi se poslužuju lokalno iz `/assets/fonts/` (woff2, latin + latin-ext), bez zahtjeva prema Googleu;
  - OG slika za dijeljenje `/assets/og.jpg` (1200×630, izrađena s canvas-design);
  - stranica `/404.html` u istom stilu, sa zaglavljem i podnožjem stranice te poveznicama na HR i EN početnu (jedna 404 za oba jezika, jer GitHub Pages ima jednu).
