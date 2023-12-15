export const ApinmajaData = () => {
  const Tehtävät = [
    {
      tehtNum: "1",
      tehtName: "Esimerkki",
      Kategoria: "Apinmaja",
    },
    {
      tehtNum: "2",
      tehtName: "Hiiripiiri -peli",
      title: "Hiiripiiri",
      Kategoria: "Apinmaja",
      puolTeksti:
        "Miuku-Mauku jahtaa jälleen Pointteri-hiirtä. Hiiri on kuitenkin nopeampi ja vie kissan mitä ihmeellisimpiin seikkailuihin matkallaan.",
      puolKuva: "src/assets/Apinmajaimages/kissahiiri.webp",
      peliTitle: "Pelaa täällä!",
      Unity:
        "https://digiadventurers.com/unity-games/prod/hiiripiiri/index.html",
      kysymys: "Mitä “Hiiripiiri” -tehtävässä opitaan?",
      vaihtoehdot:
        "A) Tekstin kirjoittamista B) Havannointia ja hiiren käyttöä C) Kuvien piirtämistä D) Matemaattisia taitoja",
      vastaus: "Oikea vastaus: B) Havannointia ja hiiren käyttöä",
      SoundCloud: "soundcloud.com/digiseikkailu-oy/apinmaja-2",
    },
    {
      tehtNum: "3",
      tehtName: "Hiiritehtävä 1",
      puolTitle: "Napsauttele numerot",
      Kategoria: "Apinmaja",
      puolTeksti:
        "Harjoittele klikkaamaan kaksoisnapsautuksella numeroita järjestyksessä. Mikä kuva ilmestyy ruudulle? Mitä tietoturvaan liittyviä huomioita voit tehdä kuvasta?",
      Kuva: "src/assets/Apinamajaimages/kissahiiri.webp",
      peliTitle: "Aloita tehtävä!",
      Unity: "https://digiadventurers.com/unity-games/prod/peli1/index.html",
      kysymys: "Mitä “Napsuttele numerot” -tehtävässä harjoitellaan?",
      vaihtoehdot:
        "A) Numeroiden kirjoittamista B) Kuvien piirtämistä C) Hiiren kaksoisnapsautuksen käyttöä numeroiden valitsemiseen D) Tekstin muokkaamista",
      vastaus:
        "Oikea vastaus: C) Hiiren kaksoisnapsautuksen käyttöä numeroiden valitsemiseen",
      SoundCloud:
        "https://soundcloud.com/digiseikkailu-oy/apinmaja-3-hiiritehtaevae-1",
    },
    {
      tehtNum: "4",
      tehtName: "Hiiritehtävä 2",
      puolTitle: "Seuraa viivaa",
      puolTeksti:
        "Seuraa viivaa hiiren osoittimella. Paina hiiren ykköspainiketta kun maalaat viivaa. Pyri tekemään mahdollisimman tarkasti.",
      Kategoria: "Apinmaja",
      isoKuva: "src/assets/Apinamajaimages/tietokoneJaPeli.webp",
      peliTitle: "Aloita tehtävä!",
      Unity: "https://digiadventurers.com/unity-games/prod/peli2/index.html",
      kysymys: "Mitä tulee tehdä “Seuraa viivaa” -tehtävässä?",
      vaihtoehdot:
        "A) Seuraa viivaa näppäimistön nuolinäppäimillä B) Seuraa viivaa hiiren osoittimella ja paina hiiren ykköspainiketta viivaa maalatessa C) Seuraa viivaa kosketusnäytöllä D) Seuraa viivaa ja kirjoita numerot järjestyksessä",
      vastaus:
        "Oikea vastaus: B) Seuraa viivaa hiiren osoittimella ja paina hiiren ykköspainiketta viivaa maalatessa",
      SoundCloud:
        "https://soundcloud.com/digiseikkailu-oy/apinmaja-3-hiiritehtaevae-2",
    },
    {
      tehtNum: "5",
      tehtName: "Hiiritehtävä 3",
      puolTitle: "Maalaa ja lihavoi nimet",
      Kategoria: "Apinmaja",
      puolTekstit: [
        "Seuraa viivaa hiiren osoittimella. Paina hiiren ykköspainiketta kun maalaat viivaa. Pyri tekemään mahdollisimman tarkasti.",
        "Etsi tekstistä nimet. Maalaa nimen kirjaimet hiirellä. Nimen tausta muuttuu siniseksi. Paina nyt pikakomentoa Ctrl + B Komennolla saat lihavoitua sanan. Siirry seuraavaan nimeen. Kuinka monta nimeä tarinasta löysit?",
      ],
      näppisKuva: "src/assets/Apinamajaimages/näppäimistö.webp",
      peliTitle: "Harjoittele täällä!",
      Unity: "https://digiadventurers.com/unity-games/prod/peli3/index.html",
      SoundCloud:
        "https://soundcloud.com/digiseikkailu-oy/apinmaja-3-hiiritehtaevae-3",
    },
    {
      tehtNum: "6",
      tehtName: "Hiiritehtävä 4",
      title: "Maalaa ja lihavoi riimiparit",
      Kategoria: "Apinmaja",
      puolTeksti:
        "Etsi tekstistä riimiparit. Maalaa riimin kirjaimet hiirellä. Riimin tausta muuttuu siniseksi. Nyt tee taas lihavointi painamalla Ctrl + B pikakomentoa.",
      isoKuva: "src/assets/Apinamajaimages/tietokoneVärikäs2.webp",
      puolKuvat: ["DogenluuMaalattu", "DogenluuLihavoitu"],
      Unity: "https://digiadventurers.com/unity-games/prod/peli4/index.html",
      kysymys: "Mitä tulee tehdä “Maalaa ja lihavoi riimiparit” -tehtävässä?",
      vaihtoehdot:
        "A) Etsi ja kirjoita uusia riimejä B) Etsi tekstistä riimiparit, maalaa ne hiirellä ja lihavoi Ctrl + B -pikakomennolla C) Etsi ja poista riimiparit tekstistä D) Vain lihavoi tekstissä olevia riimejä",
      vastaus:
        "Oikea vastaus: B) Etsi tekstistä riimiparit, maalaa ne hiirellä ja lihavoi Ctrl + B -pikakomennolla",
      SoundCloud:
        "https://soundcloud.com/digiseikkailu-oy/apinmaja-3-hiiritehtaevae-4",
    },
    {
      tehtNum: "7",
      tehtName: "Hiiritehtävä 5",
      puolTitle: "Raahaa ruuat kuppeihin",
      Kategoria: "Apinmaja",
      puolTeksti:
        "Siirrä hiirellä herkut oikeisiin ruokakuppeihin Dogelle ja Miuku-Maukulle. Jotkut ruuista sopivat molemmille. Silloin voit valita kummalle ruuan annat.",
      isoKuva: "src/assets/Apinamajaimages/tietokonekoirat.webp",
      peliTitle: "Pelaa täällä!",
      Unity: "https://digiadventurers.com/unity-games/prod/peli5/index.html",
      kysymykset: [
        "Mitä tulee tehdä “Raahaa ruuat kuppeihin” -tehtävässä?",
        "Kumpi sai lopuksi enemmän herkkuja ?",
      ],
      vaihtoehdot: [
        "A) Siirrä herkut oikeisiin ruokakuppeihin pitämällä hiiren painiketta pohjassa B) Siirrä herkut vain hiirtä liikuttamalla C) Valitse herkut napsauttamalla niitä D) Kirjoita herkkujen nimet",
        "A) Doge B) Miuku",
      ],
      SoundCloud:
        "https://soundcloud.com/digiseikkailu-oy/apinmaja-3-hiiritehtaevae-5",
    },
    {
      tehtNum: "8",
      tehtName: "Hiiritehtävä 6",
      puolTitle: "Leikkaa ja liimaa salainen viesti",
      Kategoria: "Apinmaja",
      puolTeksti:
        "Harjoitellaan kopioi – leikkaa – liitä -toimintoja. Osaatko päätellä, mitkä sanat pitää poistaa ja minkä salaisen viestin Miuku-Mauku lähettää Dogelle. Maalaa ylimääräinen sana hiirellä. Leikkaa tai kopioi sana pikakomennolla. Liitä sanat yksi kerrallaan viestilappuun.",
      isoKuva: "src/assets/Apinamajaimages/tietokoneCtrl+c.webp",
      Pikakomentoteksti: "Pikakomennot",
      Pikakomennot: ["Ctrl + C", "Ctrl + X", "Ctrl + V"],
      peliTitle: "Harjoittele täällä!",
      Unity: "https://digiadventurers.com/unity-games/prod/peli6/index.html",
      kysymys:
        "Mitä tehtävässä “Leikkaa ja liimaa salainen viesti” harjoitellaan?",
      vaihtoehdot:
        "A) Tekstin kirjoittamista B) Kopioi, leikkaa ja liitä -toimintoja pikakomentojen avulla C) Tekstin maalaamista hiirellä D) Sanojen poistamista tekstistä",
      vastaus:
        "Oikea vastaus: B) Kopioi, leikkaa ja liitä -toimintoja pikakomentojen avulla",
      SoundCloud:
        "https://soundcloud.com/digiseikkailu-oy/apinmaja-3-hiiritehtaevae-6",
    },
    {
      tehtNum: "9",
      tehtName: "Hiiritehtävä 7",
      pieniTitle: "Hillo-Hämppiksen kaksoisnapautushippa",
      Kategoria: "Apinmaja",
      isoKuva: "src/assets/Apinamajaimages/hiiriIkkuna.webp",
      peliTitle: "Pelaa täällä!",
      Unity: "https://digiadventurers.com/unity-games/prod/peli7/index.html",
      hilloHämppisTeksti:
        "Hillo-hämppis vipeltää nopeasti karkuun ja innostuu hippaleikeistä, varsinkin Kursorin vanhoissa ja pölyisissä pitsiverhoissa! Yritä saada Hillo kiinni! Siitä on hauskaa testata nopeuttasi!",
      keskitetytTekstit: [
        "Kun Kursori saa Hillon kiinni, hän vie sen varovasti purkissa ulos.",
        "Hillo jatkaa matkaa kohti uusia seikkailuja!",
      ],
      kysymys:
        "Mitä “Hillo-hämppiksen kaksoisnapautushippa” -tehtävässä harjoitellaan?",
      vaihtoehdot:
        "A) Äänien tunnistamista B) Kuvien piirtämistä C) Nopeutta ja koordinaatiokykyä hiirellä toimimisessa sekä kaksoisnapsautusta D) Tekstin kirjoittamista",
      vastaus:
        "Oikea vastaus: C) Nopeutta ja koordinaatiokykyä hiirellä toimimisessa sekä kaksoisnapsautusta",
      SoundCloud:
        "https://soundcloud.com/digiseikkailu-oy/apinmaja-3-hiiritehtaevae-7",
    },
    {
      tehtNum: "10",
      tehtName: "Hiiritehtävä 8",
      pieniTitle: "Hiiren ja kissan piiloleikki",
      Kategoria: "Apinmaja",
      puolTeksti:
        "Miuku-Mauku jahtaa Pointteria pihalla. Auta Pointteri seuraavaan piilopaikkaan ennen kuin Miuku-Mauku saa sen kiinni.  Hiiri liikkuu sinne, minne kohtaan teet kaksoisnapsautuksen hiirellä.",
      isoKuva: "src/assets/Apinmajaimages/isoKissaHiiri.webp",
      peliTitle: "Pelaa täällä!",
      Unity: "https://digiadventurers.com/unity-games/prod/peli8/index.html",
      peliteksti:
        "Vaikka oikeassa elämässä kissat jahtaavat pieniä eläimiä, tässä tarinassa Miuku-Mauku päästää Pointteri-hiiren aina vapaaksi, sillä molemmat tykkäävät kuntoilla pihalla juoksentelemalla. ",
      kysymys:
        "Mitä “Auta hiirtä piiloutumaan Miuku-Maukulta” -tehtävässä harjoitellaan?",
      vaihtoehdot:
        "A) Kuvien piirtämistä B) Tekstin kirjoittamista C) Nopeutta ja koordinaatiokykyä hiirellä toimimisessa ja kaksoisnapsautusta D) Äänien tunnistamista",
      vastaus:
        "Oikea vastaus: C) Nopeutta ja koordinaatiokykyä hiirellä toimimisessa ja kaksoisnapsautusta",
      SoundCloud:
        "https://soundcloud.com/digiseikkailu-oy/apinmaja-3-hiiritehtaevae-8",
    },
    {
      tehtNum: "11",
      tehtName: "Hiiritehtävä 10",
      title: "Suunnittele oma tietokonehiiri",
      Kategoria: "Apinmaja",
      puolTeksti:
        "Tutustu Erilaisia hiiriä -osuuteen. Tutustutaan tietokonehiirien muotoiluun ja pohditaan niiden käytettävyyteen liittyviä seikkoja kuten nappien paikkoja, muotoja, värejä ja toiminnallisuuksia. Suunnittele ja piirrä tietokonehiiri omiin tarpeisiin. Minkälainen design olisi sinua miellyttävä? Kerro mitä toimintoja löytyy hiirestäsi oikean painikkeen ja vasemman painikkeen alta.",
      isoKuva: [
        "src/assets/Apinmajaimages/värihiiri.webp",
        "src/assets/Apinmajaimages/pelikuva.webp",
      ],
      muistelu:
        "Muistele millaisia tietokonehiiriä olet käyttänyt. Kerro hiiristä, joita olet käyttänyt.",
      pieniKuva: "",
      puolKuva: "",
      häsäApi: "Häsän ja Apin suunnittelema hiiri",
      Unity: "https://digiadventurers.com/unity-games/prod/peli10/index.html",
      peliteksti:
        "Vaikka oikeassa elämässä kissat jahtaavat pieniä eläimiä, tässä tarinassa Miuku-Mauku päästää Pointteri-hiiren aina vapaaksi, sillä molemmat tykkäävät kuntoilla pihalla juoksentelemalla. ",
      kysymys:
        "Mitä “Suunnittele oma tietokonehiiri” -tehtävässä harjoitellaan?",
      vaihtoehdot:
        "A) Tietokonehiirien korjaamista B) Tietokonehiirten käyttöä C) Tietokonehiirten muotoilua ja toiminnallisuutta D) Tietokoneohjelmien suunnittelua",
      vastaus:
        "Oikea vastaus: C) Tietokonehiirten muotoilua ja toiminnallisuutta",
      SoundCloud:
        "https://soundcloud.com/digiseikkailu-oy/apinmaja-3-hiiritehtaevae-10",
    },

    {
      tehtNum: "23",
      tehtName: "Tiedostomuodot",
      youtube: "FXrM_YErETs",
      Kategoria: "Apinmaja",
      puolTekstit: [
        "Tiedostoja tallennetaan eri muodoissa. On esim. videotiedostoja, musiikkitiedostoja, tekstitiedostoja ja kuvatiedostoja. Saman aihepiirin tiedostot kannattaa tallentaa omaan kansioonsa.",
        "Kannattaa tehdä oma kansio, jossa säilyttää itselle tärkeitä tiedostoja. Tiedostot löytyvät parhaiten kun ne on järjestetty ja nimetty.",
      ],
      puolKuvat: [
        "src/assets/tiedostomuodot3.webp",
        "src/assets/tiedostomuodot4.png.webp",
      ],
    },
  ];

  return Tehtävät;
};
