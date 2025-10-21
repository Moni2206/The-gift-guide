# Teknisk dokumentation for Tema 8 gruppeprojekt

Når man er flere der bidrager til en kodebase, lærer man hurtigt, at ens sædvanlige måder at gøre tingene på ikke nødvendigvis er logis for alle.

Skriv derfor jeres fælles retningslinjer for punkterne herunder(tilføj gerne flere selv), sådan som det giver bedst mening for jer som gruppe. Dokumentationen sikre, at jeres fælles kodebase forbliver overskuelig, er let at arbejde med og til at forstå for alle, og at I undgå konflikter, og har nemmere ved at hjælpe hinanden undervejs.

**Life hack:**
Markdown gør det muligt at formatere teksten, inkludere links, billeder og kodeeksempler på en struktureret og overskuelig måde. Dette gør dokumentationen lettere at læse og forstå i modsætning til en PDF, som kan være tung at navigere i, især når der er behov for hurtig reference.
Markdown cheatsheet: <https://github.com/adam-p/markdown-here/wiki/markdown-cheatsheet>

## Rapport:

Henvis med link til jeres README.md i dokumentationsrapporten:
(fx. https://github.com/KEA-MMD-T7/teknisk_dokumentation/edit/main/README.md)

## Projektstruktur:

Beslut, hvordan I vil organisere jeres projekt – struktur for mapper og filer.

- Hvordan organiserer I billeder, fonte og andre ressourcer?
  Vi har valgt at lave organisere vores

indholdt med seperate mapper, fremfor at

- Hvor placerer I boilerplate?(fx CSS- og JavaScript-filer, der bruges på tværs af projektet)

Vores boilerplates er placeret individuelt i hver af html-sidernes <head>.
Struktureret mellem links til css, script og links til fonte.

- Hvor placerer I HTML, CSS- og JavaScript-filer til fx detaljevisning og listevisning?

  Listevisningen og detalje visningen har hver især deres seperate sammenhængende css stylesheet som deler samme navn.
  Vi har kun benyttet os af javascript på listevisningen, så vi har navngivet js-filen productliste ligesom html og css filerne der snakker sammen.

## Navngivning:

Beslutte hvordan i vil navngive filer og mapper for at sikre en ensartet struktur og undgå forvirring.

- Hvordan navngiver I filnavne? (fx små bogstaver, ingen mellemrum, brug af - eller \_)
  Vi blev enige om små bogstaver og ingen mellemrum, hvilket var den fremgangsmetode der lå naturligt for os alle. Vi har ikke oplevet komplikationer med

- Hvordan sikre I at det er til at forstå hvilke HTML-, CSS- og JavaScript-filer der høre sammen?
  De deler sammen navn, og style.css er universelt for alle html filer.

## Link til scripts:

- Hvor placerer I script referencer i HTML'en? (fx i <head> med defer attribute, eller sidst i <body>)
  Det er lagt i <head> i samtlige

## Git branches:

- Hvordan navngiver I branches, så alle kan forstår hvem der arbejder i branchen og på hvad?(fx feature-lotte-formular)
  Vi har haft tre branches vi har arbejdet i, main, landingspage og productlist.

## Arbejdsflow:

- Hvordan fordeler I arbejdet, så I undgår at flere arbejder i de samme filer samtidigt?
  Vi har plejet at tage en form for en daily scrum om morgenen og det sidste vi gør om eftermiddagen har været at uddelegere arbejdsopgaver.

- Hvordan sikrer I, at commit-beskeder er beskrivende?
  Vi har forsøgt at gøre det så simpelt som muligt, med beskrivelser som font, h1, sortering eller js, og så håbet at gruppen har været forstående, ellers har vi haft en åben dialog digitalt hvor man har kunne spørge ind til de ting der kunne virke forvirrende og hvis der var noget man var uforstående overfor.

- Hvordan kommunikerer i om ændringer i main branchen når feature merges?
  Vi har siddet sammen og arbejdet oftest da vi var merget, da der opstod problemer til sidst kommunikerede vi og en sad og fiksede problemerne. Ellers har vi været meget forsigtige med at arbejde i main, og holdt os til vores branches, det har været en relativ skadesfri proces.

## Kode:

- Hvordan skriver i funktioner i JavaScript?(fx med function keyword eller som arrow functions)
  Der er primært blevet brugt arrow, men nogle steder er keyword function også kommet i brug i javascript.

- Beslut hvilken CSS selector i benyttes til referener i henholdsvis CSS og JavaScript(fx. id'er til JavaScript og Classes til CSS)
  Der er blevet brugt id i Javascript, mens classes er blevet brugt til både CSS og Javascript.

- Skal filer have korte forklaringer som kommentarer?
  Der har været kommentarer/forklaringer visse steder, hvor det blev vurderet vigitgt eller nødvendigt.

# Funktionalitet

Dette afsnit skal forklare hvad I konkret har arbejde med, for at udvikle websitet. Tænk over hvilke interaktioner brugeren kan foretage på sitet? Eller hvordan websitet håndterer og præsenterer data? Eksempler på funktionalitet, der kan beskrives:

- Hentning af produkter fra API.
  Brugeren får gennem URL parametre at browse i sektionerne "for him" og "for her".

- Filtrering af produkter baseret på brugerens valg.

URL parametrene håndteger hvad for en productliste der bliver vist.

Intentionelt er det tænkt at brugeren skal kunne sortere i prisklasser og mærkedage, men det er der ikke kodet til.

- Dynamisk visning af produkter i HTML.

hjemmesiden er gjort dynamisk ved at hente data direkte fra en API, navigationsknapper og viser produkterne som HTML-kort med pris, rabatpris og billede.

Brug korte beskrivelser, som i eksemplerne herover

# API endpoints

Dette afsnit skal liste de endpoints fra API'et i har benyttet:

- (fx. https://dummyjson.com/products)

For at få fat i billederne i vores dummyjson har vi brugt attributes <img> til at fange den productliste som vi skulle. Det vises her:

<div class="faver">
            <img src="${product.thumbnail}" alt="${product.title}" />
          </div>

# Dokumentation af Funktion

Dette afsnit skal beskrive en funktion I selv har udviklet. Det kunne eksempelvis være en funktion der generere en listen over fx. produkter:

- Beskrivelse: Hvad gør funktionen? Hvordan spiller den sammen med resten af koden?
- Parametre: Hvilke input forventes (fx en værdi fra en dropdown eller URL'en)?
- Returnerer: Beskriv, om funktionen returnerer en værdi eller blot manipulerer DOM’en.
- Eksempel på brug: Indsæt funktions-koden herunder(der hvor koden er i eksemplet) og vis, hvordan funktionen kaldes:

```javascript
//funktionens kode:
function voresFunktion(sprog) {
  console.log(`${sprog} syntax highlighting`);
}
//hvordan funktionen kaldes:
voresFunktion("JavaScript");
```
