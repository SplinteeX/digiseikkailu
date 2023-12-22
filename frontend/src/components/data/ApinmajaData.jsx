export const ApinmajaData = () => {
  const Tehtävät = [
    {
      tehtNum: "1",
      tehtName: "Tutustu tietokonehiireen",
      Kategoria: "Apinmaja",
      kysyms: "Mitä “Hiiripiiri” -tehtävässä opitaan?",
      Kuvat: ["/src/assets/ApinmajaImages/HiirenTaitokortti.webp"],
      puolKuvat: [
        "/src/assets/ApinmajaImages/Ykköspainike.webp",
        "/src/assets/ApinmajaImages/Kakkospainike.webp",
        "/src/assets/ApinmajaImages/Keskipainike.webp",
        "/src/assets/ApinmajaImages/Alempikeskipainike.webp",
        "/src/assets/ApinmajaImages/Ykkösklikkaus.webp",
        "/src/assets/ApinmajaImages/Kakkosklikkaus.webp",
        "/src/assets/ApinmajaImages/Maalaaminen.webp",
      ],
      puolTekstit: [
        "Ykköspainike, vasen painike.",
        "Kakkospainike, oikea painike.",
        "Keskipainike, rullaa ylös.",
        "Keskipainike, rullaa alas.",
        "Yksöisklikkaus.",
        "Kaksoisklikkaus",
        "Maalaaminen ja raahaaminen",
      ],
      Teksti:
        "Käden asento: Käsi lepää suorana ja rentona hiiren päällä. Etusormi ja keskisormi asettuvat näppäinten päälle. Peukalo tukee hiirtä sivulla. Olkapäät ovat rennot.",
      kysymys: "Mitkä ovat hiiren kolme yleisintä painiketta? ",
      vaihtoehdot: [
        "A) Ykköspainike, kakkospainike, keskipainike",
        "B) Ykköspainike, kaksoispainike, vierityspainike",
        "C) Vasen painike, oikea painike, kaksoisklikkauspainike",
        "D) Vasen painike, oikea painike, keskirulla",
      ],
      vastaus: "A) Ykköspainike, kakkospainike, keskipainike",
    },
    {
      tehtNum: "2",
      tehtName: "Hiiripiiri -peli",
      title: "Hiiripiiri",
      Kategoria: "Apinmaja",
      puolTeksti:
        "Miuku-Mauku jahtaa jälleen Pointteri-hiirtä. Hiiri on kuitenkin nopeampi ja vie kissan mitä ihmeellisimpiin seikkailuihin matkallaan.",
      puolKuva: "/src/assets/ApinmajaImages/kissahiiri.webp",
      peliTitle: "Pelaa täällä!",
      Unity:
        "https://digiadventurers.com/unity-games/prod/hiiripiiri/index.html",
      kysymys: "Mitä “Hiiripiiri” -tehtävässä opitaan?",
      vaihtoehdot: [
        "A) Tekstin kirjoittamista",
        "B) Havannointia ja hiiren käyttöä",
        "C) Kuvien piirtämistä",
        "D) Matemaattisia taitoja",
      ],
      vastaus: "B) Havannointia ja hiiren käyttöä",
      SoundCloud: "soundcloud.com/digiseikkailu-oy/apinmaja-2",
    },
    {
      tehtNum: "3",
      tehtName: "Hiiritehtävä 1",
      smallTitle: "Napsauttele numerot",
      Kategoria: "Apinmaja",
      Teksti:
        "Harjoittele klikkaamaan kaksoisnapsautuksella numeroita järjestyksessä. Mikä kuva ilmestyy ruudulle? Mitä tietoturvaan liittyviä huomioita voit tehdä kuvasta?",
      Kuva: "/src/assets/ApinmajaImages/tietokonevärikäs.webp",
      peliTitle: "Aloita tehtävä!",
      Unity: "https://digiadventurers.com/unity-games/prod/peli1/index.html",
      kysymys: "Mitä “Napsuttele numerot” -tehtävässä harjoitellaan?",
      vaihtoehdot: [
        "A) Numeroiden kirjoittamista",
        "B) Kuvien piirtämistä",
        "C) Hiiren kaksoisnapsautuksen käyttöä numeroiden valitsemiseen",
        "D) Tekstin muokkaamista",
      ],
      vastaus: "C) Hiiren kaksoisnapsautuksen käyttöä numeroiden valitsemiseen",
      SoundCloud:
        "https://soundcloud.com/digiseikkailu-oy/apinmaja-3-hiiritehtaevae-1",
    },
    {
      tehtNum: "4",
      tehtName: "Hiiritehtävä 2",
      smallTitle: "Seuraa viivaa",
      Teksti:
        "Seuraa viivaa hiiren osoittimella. Paina hiiren ykköspainiketta kun maalaat viivaa. Pyri tekemään mahdollisimman tarkasti.",
      Kategoria: "Apinmaja",
      Kuva: "/src/assets/ApinmajaImages/tietokoneJaPeli.webp",
      peliTitle: "Aloita tehtävä!",
      Unity: "https://digiadventurers.com/unity-games/prod/peli2/index.html",
      kysymys: "Mitä tulee tehdä “Seuraa viivaa” -tehtävässä?",
      vaihtoehdot: [
        "A) Seuraa viivaa näppäimistön nuolinäppäimillä",
        "B) Seuraa viivaa hiiren osoittimella ja paina hiiren ykköspainiketta viivaa maalatessa",
        "C) Seuraa viivaa kosketusnäytöllä",
        "D) Seuraa viivaa ja kirjoita numerot järjestyksessä",
      ],
      vastaus:
        "B) Seuraa viivaa hiiren osoittimella ja paina hiiren ykköspainiketta viivaa maalatessa",
      SoundCloud:
        "https://soundcloud.com/digiseikkailu-oy/apinmaja-3-hiiritehtaevae-2",
    },
    {
      tehtNum: "5",
      tehtName: "Hiiritehtävä 3",
      smallTitle: "Maalaa ja lihavoi nimet",
      Kategoria: "Apinmaja",
      Tekstit: [
        "Seuraa viivaa hiiren osoittimella. Paina hiiren ykköspainiketta kun maalaat viivaa. Pyri tekemään mahdollisimman tarkasti.",
        "Etsi tekstistä nimet. Maalaa nimen kirjaimet hiirellä. Nimen tausta muuttuu siniseksi. Paina nyt pikakomentoa Ctrl + B Komennolla saat lihavoitua sanan. Siirry seuraavaan nimeen. Kuinka monta nimeä tarinasta löysit?",
      ],
      Kuva: "/src/assets/ApinmajaImages/näppäimistö.webp",
      peliTitle: "Harjoittele täällä!",
      Unity: "https://digiadventurers.com/unity-games/prod/peli3/index.html",
      kysyms: "Miten teksti lihavoidaan tässä tehtävässä?",
      vaihtoehdot: [
        "A) Käyttämällä Ctrl + C",
        "B) Käyttämällä Ctrl + V",
        "C) Käyttämällä Ctrl + B",
        "D) Käyttämällä Ctrl + X",
      ],
      vastaus: "C) Käyttämällä Ctrl + B",
      SoundCloud:
        "https://soundcloud.com/digiseikkailu-oy/apinmaja-3-hiiritehtaevae-3",
    },
    {
      tehtNum: "6",
      tehtName: "Hiiritehtävä 4",
      smallTitle: "Maalaa ja lihavoi riimiparit",
      Kategoria: "Apinmaja",
      puolTeksti:
        "Etsi tekstistä riimiparit. Maalaa riimin kirjaimet hiirellä. Riimin tausta muuttuu siniseksi. Nyt tee taas lihavointi painamalla Ctrl + B pikakomentoa.",
      Kuva: "/src/assets/ApinmajaImages/tietokoneVärikäs2.webp",
      puolKuva: "/src/assets/ApinmajaImages/DogenluuMaalattu.webp",
      Unity: "https://digiadventurers.com/unity-games/prod/peli4/index.html",
      kysymys: "Mitä tulee tehdä “Maalaa ja lihavoi riimiparit” -tehtävässä?",
      vaihtoehdot: [
        "A) Etsi ja kirjoita uusia riimejä",
        "B) Etsi tekstistä riimiparit, maalaa ne hiirellä ja lihavoi Ctrl + B -pikakomennolla C) Etsi ja poista riimiparit tekstistä",
        "D) Vain lihavoi tekstissä olevia riimejä",
      ],
      vastaus:
        "B) Etsi tekstistä riimiparit, maalaa ne hiirellä ja lihavoi Ctrl + B -pikakomennolla",
      SoundCloud:
        "https://soundcloud.com/digiseikkailu-oy/apinmaja-3-hiiritehtaevae-4",
    },
    {
      tehtNum: "7",
      tehtName: "Hiiritehtävä 5",
      smallTitle: "Raahaa ruuat kuppeihin",
      Kategoria: "Apinmaja",
      Teksti:
        "Siirrä hiirellä herkut oikeisiin ruokakuppeihin Dogelle ja Miuku-Maukulle. Jotkut ruuista sopivat molemmille. Silloin voit valita kummalle ruuan annat.",
      Kuva: "/src/assets/ApinmajaImages/tietokonekoirat.webp",
      peliTitle: "Pelaa täällä!",
      Unity: "https://digiadventurers.com/unity-games/prod/peli5/index.html",
      kysymykset: [
        "Mitä tulee tehdä “Raahaa ruuat kuppeihin” -tehtävässä?",
        "Kumpi sai lopuksi enemmän herkkuja ?",
      ],
      vaihtoehdot: [
        "A) Siirrä herkut oikeisiin ruokakuppeihin pitämällä hiiren painiketta pohjassa",
        "B) Siirrä herkut vain hiirtä liikuttamalla",
        "C) Valitse herkut napsauttamalla niitä",
        "D) Kirjoita herkkujen nimet",
      ],
      vastaus:
        "A) Siirrä herkut oikeisiin ruokakuppeihin pitämällä hiiren painiketta pohjassa",
      SoundCloud:
        "https://soundcloud.com/digiseikkailu-oy/apinmaja-3-hiiritehtaevae-5",
    },
    {
      tehtNum: "8",
      tehtName: "Hiiritehtävä 6",
      puolTitle: "Leikkaa ja liimaa salainen viesti",
      Kategoria: "Apinmaja",
      Teksti:
        "Harjoitellaan kopioi – leikkaa – liitä -toimintoja. Osaatko päätellä, mitkä sanat pitää poistaa ja minkä salaisen viestin Miuku-Mauku lähettää Dogelle. Maalaa ylimääräinen sana hiirellä. Leikkaa tai kopioi sana pikakomennolla. Liitä sanat yksi kerrallaan viestilappuun.",
      Kuva: "/src/assets/ApinmajaImages/tietokoneCtrl+c.webp",
      smallTitle: "Pikakomennot",
      Tekstit: ["Ctrl + C", "Ctrl + X", "Ctrl + V"],
      peliTitle: "Harjoittele täällä!",
      Unity: "https://digiadventurers.com/unity-games/prod/peli6/index.html",
      kysymys:
        "Mitä tehtävässä “Leikkaa ja liimaa salainen viesti” harjoitellaan?",
      vaihtoehdot: [
        "A) Tekstin kirjoittamista",
        "B) Kopioi, leikkaa ja liitä -toimintoja pikakomentojen avulla",
        "C) Tekstin maalaamista hiirellä",
        "D) Sanojen poistamista tekstistä",
      ],
      vastaus: "B) Kopioi, leikkaa ja liitä -toimintoja pikakomentojen avulla",
      SoundCloud:
        "https://soundcloud.com/digiseikkailu-oy/apinmaja-3-hiiritehtaevae-6",
    },
    {
      tehtNum: "9",
      tehtName: "Hiiritehtävä 7",
      smallTitle: "Hillo-Hämppiksen kaksoisnapautushippa",
      Kategoria: "Apinmaja",
      Kuva: "/src/assets/ApinmajaImages/hiiriIkkuna.webp",
      peliTitle: "Pelaa täällä!",
      Unity: "https://digiadventurers.com/unity-games/prod/peli7/index.html",
      Text: "Hillo-hämppis vipeltää nopeasti karkuun ja innostuu hippaleikeistä, varsinkin Kursorin vanhoissa ja pölyisissä pitsiverhoissa! Yritä saada Hillo kiinni! Siitä on hauskaa testata nopeuttasi!",
      Tekstit: [
        "Kun Kursori saa Hillon kiinni, hän vie sen varovasti purkissa ulos.",
        "Hillo jatkaa matkaa kohti uusia seikkailuja!",
      ],
      kysymys:
        "Mitä “Hillo-hämppiksen kaksoisnapautushippa” -tehtävässä harjoitellaan?",
      vaihtoehdot: [
        "A) Äänien tunnistamista",
        "B) Kuvien piirtämistä",
        "C) Nopeutta ja koordinaatiokykyä hiirellä toimimisessa sekä kaksoisnapsautusta",
        "D) Tekstin kirjoittamista",
      ],
      vastaus:
        "C) Nopeutta ja koordinaatiokykyä hiirellä toimimisessa sekä kaksoisnapsautusta",
      SoundCloud:
        "https://soundcloud.com/digiseikkailu-oy/apinmaja-3-hiiritehtaevae-7",
    },
    {
      tehtNum: "10",
      tehtName: "Hiiritehtävä 8",
      smallTitle: "Hiiren ja kissan piiloleikki",
      Kategoria: "Apinmaja",
      Teksti:
        "Miuku-Mauku jahtaa Pointteria pihalla. Auta Pointteri seuraavaan piilopaikkaan ennen kuin Miuku-Mauku saa sen kiinni.  Hiiri liikkuu sinne, minne kohtaan teet kaksoisnapsautuksen hiirellä.",
      Kuva: "/src/assets/ApinmajaImages/isoKissaHiiri.webp",
      peliTitle: "Pelaa täällä!",
      Unity: "https://digiadventurers.com/unity-games/prod/peli8/index.html",
      peliteksti:
        "Vaikka oikeassa elämässä kissat jahtaavat pieniä eläimiä, tässä tarinassa Miuku-Mauku päästää Pointteri-hiiren aina vapaaksi, sillä molemmat tykkäävät kuntoilla pihalla juoksentelemalla. ",
      kysymys:
        "Mitä “Auta hiirtä piiloutumaan Miuku-Maukulta” -tehtävässä harjoitellaan?",
      vaihtoehdot: [
        "A) Kuvien piirtämistä B) Tekstin kirjoittamista",
        "C) Nopeutta ja koordinaatiokykyä hiirellä toimimisessa ja kaksoisnapsautusta",
        "D) Äänien tunnistamista",
      ],
      vastaus:
        "C) Nopeutta ja koordinaatiokykyä hiirellä toimimisessa ja kaksoisnapsautusta",
      SoundCloud:
        "https://soundcloud.com/digiseikkailu-oy/apinmaja-3-hiiritehtaevae-8",
    },
    {
      tehtNum: "11",
      tehtName: "Hiiritehtävä 10",
      title: "Suunnittele oma tietokonehiiri",
      Kategoria: "Apinmaja",
      Teksti:
        "Tutustu Erilaisia hiiriä -osuuteen. Tutustutaan tietokonehiirien muotoiluun ja pohditaan niiden käytettävyyteen liittyviä seikkoja kuten nappien paikkoja, muotoja, värejä ja toiminnallisuuksia. Suunnittele ja piirrä tietokonehiiri omiin tarpeisiin. Minkälainen design olisi sinua miellyttävä? Kerro mitä toimintoja löytyy hiirestäsi oikean painikkeen ja vasemman painikkeen alta.",
      Kuvat: [
        "/src/assets/ApinmajaImages/värihiiri.webp",
        "/src/assets/ApinmajaImages/pelikuva.webp",
      ],
      Text: "Muistele millaisia tietokonehiiriä olet käyttänyt. Kerro hiiristä, joita olet käyttänyt.",
      pieniKuva: "",
      puolKuva: "",
      smallTitle: "Häsän ja Apin suunnittelema hiiri",
      Unity: "https://digiadventurers.com/unity-games/prod/peli10/index.html",
      peliteksti:
        "Vaikka oikeassa elämässä kissat jahtaavat pieniä eläimiä, tässä tarinassa Miuku-Mauku päästää Pointteri-hiiren aina vapaaksi, sillä molemmat tykkäävät kuntoilla pihalla juoksentelemalla. ",
      kysymys:
        "Mitä “Suunnittele oma tietokonehiiri” -tehtävässä harjoitellaan?",
      vaihtoehdot: [
        "A) Tietokonehiirien korjaamista",
        "B) Tietokonehiirten käyttöä",
        "C) Tietokonehiirten muotoilua ja toiminnallisuutta",
        "D) Tietokoneohjelmien suunnittelua",
      ],
      vastaus: "C) Tietokonehiirten muotoilua ja toiminnallisuutta",
      SoundCloud:
        "https://soundcloud.com/digiseikkailu-oy/apinmaja-3-hiiritehtaevae-10",
    },
    {
      tehtNum: "12",
      tehtName: "Tutustu tietokoneen näppäimistöön",
      title: "Tutustu tietokoneen näppäimistöön",
      Kategoria: "Apinmaja",
      Kuvat: [
        "/src/assets/ApinmajaImages/Näppäimistö2.webp",
        "/src/assets/ApinmajaImages/NäppäimistöKuva.webp",
      ],
      smallTitle: "Kokeile näppäimistöä",
      TinyMCE: "Aloita tästä!",
      peliteksti:
        "Vaikka oikeassa elämässä kissat jahtaavat pieniä eläimiä, tässä tarinassa Miuku-Mauku päästää Pointteri-hiiren aina vapaaksi, sillä molemmat tykkäävät kuntoilla pihalla juoksentelemalla.",
      kysymys: "Mikä on QWERTY-näppäimistön nimen alkuperä?",
      vaihtoehdot: [
        "A) Se on keksijän sukunimen mukaan",
        "B) Se tulee näppäimistön ensimmäisen rivin kuuden ensimmäisen kirjaimen mukaan",
        "C) Se on lyhenne sanasta ‘Quick’",
        "D) Se viittaa erityiseen koodausstandaardii",
      ],
      vastaus:
        "B) Se tulee näppäimistön ensimmäisen rivin kuuden ensimmäisen kirjaimen mukaan",
      SoundCloud:
        "https://soundcloud.com/digiseikkailu-oy/apinmaja-3-hiiritehtaevae-10",
    },
    {
      tehtNum: "13",
      tehtName: "Yhdistä ja kirjoita tavut",
      Kategoria: "Apinmaja",
      puolKuva: "/src/assets/ApinmajaImages/Taitokortti.webp",
      puolTeksti:
        "Harjoitellaan kirjoittamista kahdella kädellä. Lue tavut. Mitä metsän eläimiä saat tavuja yhdistämällä?Kirjoita näppäimistöllä eläimet ja keksi lisää metsän eläimiä niin monta kuin pystyt. Kirjoita sanasi kirjoituspohjalle.",
      Kuvat: [
        "/src/assets/ApinmajaImages/NäppäimistöKirjoitus.webp",
        "/src/assets/ApinmajaImages/yhdistatavut.webp",
      ],
      smallTitle: "Kokeile näppäimistöä",
      peliteksti: "Kirjoita täällä!",
      Unity: "https://digiadventurers.com/unity-games/prod/sandbox/index.html",
      kysymys: "Mitä “Yhdistä ja kirjoita tavut” -tehtävässä harjoitellaan?",
      vaihtoehdot: [
        "A) Kirjainten ja sanojen piirtämistä",
        "B) Kirjainten painamista ja sanojen muodostamista tavuista",
        "C) Numeroiden kirjoittamista",
        "D) Kuvien yhdistämistä sanoiksi",
      ],
      vastaus: "B) Kirjainten painamista ja sanojen muodostamista tavuista",
      SoundCloud:
        "https://soundcloud.com/digiseikkailu-oy/apinmaja-3-hiiritehtaevae-10",
    },
    {
      tehtNum: "14",
      tehtName: "Näppäinmuistipeli",
      Kategoria: "Apinmaja",
      smallTitle: "Kertaile näppäimiä muistipelillä.",
      kysymys: "Mitä “Näppäinmuistipeli” -tehtävässä harjoitellaan?",
      vaihtoehdot: [
        "A) Matemaattisia taitoja",
        "B) Kuvien muistamista",
        "C) Näppäimistön näppäinten tunnistamista ja muistamista",
        "D) Sanojen kirjoittamista",
      ],
      vastaus: "C) Näppäimistön näppäinten tunnistamista ja muistamista",
      Unity:
        "https://digiadventurers.com/wp-admin/admin-ajax.php?action=h5p_embed&id=17",
    },
    {
      tehtNum: "15",
      tehtName: "Raahaa näppäimet paikoilleen",
      Kategoria: "Apinmaja",
      Kuva: "/src/assets/ApinmajaImages/LäppäriNäppäimistö.webp",
      puolTeksti:
        "Raahaa näppäimet paikoilleen! Tee tehtävä monta kertaa. Harjoittele samalla näppäinten nimiä. Opiskele näppäimistä Tutustu näppäimistöön -osiossa.",
      puolKuva: "/src/assets/ApinmajaImages/Taitokortti.webp",
      kysymys: "Mitä “Näppäinmuistipeli” -tehtävässä harjoitellaan?",
      peliTitle: "Tee tehtävä täällä!",
      vaihtoehdot: [
        "A) Näppäinten kirjoittamista",
        "B) Näppäinten piirtämistä",
        "C) Näppäinten nimiä ja sijainteja näppäimistöllä",
        "D) Näppäinten nopeaa painamista",
      ],
      vastaus: "C) Näppäinten nimiä ja sijainteja näppäimistöllä",
      Unity:
        "https://digiadventurers.com/wp-admin/admin-ajax.php?action=h5p_embed&id=13",
    },
    {
      tehtNum: "16",
      tehtName: "Perustaitoja näppiksellä",
      Kategoria: "Apinmaja",
      Kuva: "/src/assets/ApinmajaImages/Näppäintaidot.webp",

      kysymys: "Mitä “Näppäinmuistipeli” -tehtävässä harjoitellaan?",
      peliTitle: "Tee tehtävä täällä!",
      Teksti:
        "Esimerkki vastaus tehtävään:\n1. Häsä\n2. Mitä sinulle kuuluu?\n3. Katso, olen täällä!\n4. miuku-mauku@gmail.com\n5. TÄMÄ ON HUUTAMISTA!!!!\n6. Katso tänne nopeasti.\n7. Näin lisätään sulkumerkit (). Näin lisätään kauttaviiva /.\n8. Näin lisätään ristikkomerkki #.",
      numeroLista: [
        "Kirjoita jokin nimi, jossa on iso alkukirjain.",
        "Kirjoita kysymys, joka päättyy kysymysmerkkiin.",
        "Kirjoita isolla kirjaimella alkava virke johon voi laittaa huutomerkin.",
        "Kirjoita sähköpostiosoitteesi ja käytä @ -merkkiä.",
        "Kirjoita virke, jossa kaikki kirjaimet ovat ISOJA!",
        "Kirjoita virke joka alkaa isolla kirjaimella ja päättyy pisteeseen.",
        "Kirjoita sulkumerkit ( ) , kauttaviiva / , sekä ristikkomerkki # .",
      ],
      vaihtoehdot: [
        "A) Näppäimistön puhdistamista",
        "B) Kirjaimien ja erikoismerkkien kirjoittamista",
        "C) Tietokoneen käynnistämistä",
        "D) Tekstinkäsittelyohjelmien käyttöä",
      ],
      vastaus: "B) Kirjaimien ja erikoismerkkien kirjoittamista",
      TinyMCE: "Kirjoita tähän!",
    },
    {
      tehtNum: "17",
      tehtName: "Näppäinkomennot haltuun",
      Kategoria: "Apinmaja",
      Kuva: "/src/assets/ApinmajaImages/TietokoneKuva.webp",
      puolTeksti:
        "Harjoitellaan pikakomentoja. Tee raahaustehtävä, jossa harjoitellaan perus pikakomentoja tietokoneella työskennellessä. Pikakomennot näppäimistöllä kannattaa harjoitella, sillä ne nopeuttavat työtäsi. Pohdi ja kirjoita, miten voit käyttää oppimiasi pikatoimintoja kun kirjoitat esim. tarinaa tietokoneella.",
      puolKuva: "/src/assets/ApinmajaImages/TaitokorttiPikanäppäimet.webp",
      kysymys: "Mitä “Näppäinmuistipeli” -tehtävässä harjoitellaan?",
      peliTitle: "Tee tehtävä täällä!",

      vaihtoehdot: [
        "A) Näppäimistön puhdistamista",
        "B) Kirjainten ja numeroiden kirjoittamista",
        "C) Pikakomentojen käyttöä tietokoneella",
        "D) Tekstinkäsittelyohjelmien käyttöä",
      ],
      vastaus: "C) Pikakomentojen käyttöä tietokoneella",
      Unity:
        "https://digiadventurers.com/wp-admin/admin-ajax.php?action=h5p_embed&id=3",
    },
    {
      tehtNum: "18",
      tehtName: "Laamapeli",
      Kategoria: "Apinmaja",
      Kuva: "/src/assets/ApinmajaImages/laamaescape.webp",
      Teksti:
        "Miuku-Mauku leikki Kursorin purkamien näppäimistöjen näppäimillä ja hävitti ne puutarhaan. Auta Laamaa etsimään Kursori-papan kadottamat näppäimet. Saat näppäimen kerättyä sitä koskemalla ja painamalla kyseistä näppäintä samaan aikaan näppäimistöltä. Varo kiukkuista Kurttu-tätiä ja hänen kastelukannuaan.",
      puolKuva: "/src/assets/ApinmajaImages/TaitokorttiPikanäppäimet.webp",
      kysymys: "Mitä “Näppäinmuistipeli” -tehtävässä harjoitellaan?",
      youtube: "l1pSm1zw23g",
      peliTitle: "Tee tehtävä täällä!",

      vaihtoehdot: [
        "A) Näppäimistön puhdistamista",
        "B) Näppäinten keräämistä ja näppäimistön käyttöä",
        "C) Kuvien piirtämistä",
        "D) Tekstin kirjoittamista",
      ],
      vastaus: "B) Näppäinten keräämistä ja näppäimistön käyttöä",
      Unity:
        "https://i.simmer.io/@Digiseikkailu/~b7b732f3-9ece-e52f-f69e-3e6337179b52",
      SoundCloud: "https://soundcloud.com/digiseikkailu-oy/apinmaja-7",
    },
    {
      tehtNum: "19",
      tehtName: "Tekstin muokkaaminen",
      Kategoria: "Apinmaja",
      Kuva: "/src/assets/ApinmajaImages/TekstinKäsittely.webp",
      Tekstit: [
        "Mitä mahtaa tarkoittaa tekstin maalaaminen, lihavointi, kursivointi ja alleviivaus? Ota selvää.",
        "Tekstin valitseminen (=maalaaminen) Ennen tekstin muotoilua, siirtoa tai kopiointia täytyy valita tekstialue. Valitun tekstin tausta muuttuu siniseksi tai harmaaksi. Sen takia puhutaan usein alueen “maalaamisesta”.",
        "Tehtävä: Tee tehtävä suoraan alla olevaan tehtävä pohjaan. Alleviivaa päivät, Kursivoi kuukaudet ja Lihavoi vuodenajat.",
      ],
      numeroLista: [
        "Vie hiiren osoitin valitsemasi alueen alkuun.",
        "Paina hiiren ykköspainike alas ja pidä sitä alhaalla samalla, kun vedät hiiren osoittimen maalattavan alueen loppuun.",
        "Vapauta hiiren painike, kun siirrettävä alue näkyy maalattuna.",
      ],
      TinyMCE:
        "Taas oli maanantai ja uusi kouluviikko. Appi heräsi aikaisin. Talvella Apin luokka kävi liikuntatunnilla aina luistelemassa tai hiihtämässä. Tammikuu oli luistelukuukausi, helmikuussa hiihdettäisiin. Hiihtäminen oli ehdottomasti Apin suosikkilaji. Lauantaina ja sunnuntaina hän oli hiihtänyt pitkän lenkin Häsän kanssa. Mutta tänään pitäisi muistaa ottaa luistimet mukaan kouluun! <br><br> Doge ei välittänyt talviurheilusta. Talvella se pisti nenänsä ulos ovesta vain nopeasti – kesän lämpimät säät olivat enemmän sen mieleen. Keskiviikkona se oli tosin luvannut lähteä Laaman kanssa lenkille. “Pitää muistaa lämmin toppatakki!”, se ajatteli. <br><br> Appi lähti kouluun reppu selässään ja luistimet kainalossa. Pihalla oli hiljaista. Tweety oli lentänyt syksyllä lokakuussa etelään ja palaisi vasta keväällä takaisin. Kaikilla oli sitä jo kova ikävä. Maaliskuuhun oli vielä pitkä aika. Toisaalta aika kului nopeasti, pian olisi taas pitkä loma. Koko kesäkuu ja heinäkuu ihanaa vapaa-aikaa! Silloin olisi koko porukka taas koolla.",
      kysymys:
        "Miten tekstin maalaaminen (valitseminen) tehdään tietokoneella?",
      vaihtoehdot: [
        "A) Painamalla näppäimistön jokaista kirjainta",
        "B) Liikuttamalla hiiren osoitinta tekstin yli ja pitämällä hiiren ykköspainiketta alhaalla",
        "C) Kirjoittamalla teksti uudelleen",
        "D) Käyttämällä erityistä maalausohjelmaa",
      ],
      vastaus:
        "B) Liikuttamalla hiiren osoitinta tekstin yli ja pitämällä hiiren ykköspainiketta alhaalla",
    },
    {
      tehtNum: "20",
      tehtName: "Kirjoita tarina kuulemasi mukaan",
      Kategoria: "Apinmaja",
      Kuva: "/src/assets/ApinmajaImages/TarinanKirjoitus.webp",
      Teksti:
        "Kuuntele Jenni-open lukema tarina ja kirjoita alle teksti ohjeen mukaan.",
      TinyMCE: "Poista tämä teksti ja kirjoita vastauksesi tähän.",
      kysyms:
        "Mikä seuraavista kuvaa parhaiten tehtävää “Kirjoita tarina kuulemasi mukaan?,",
      vaihtoehdot: [
        "A) Kirjoita oma tarinasi.",
        "B) Kuuntele ja kirjoita kuulemasi tarina.",
        "C) Kirjoita tarina lukemasi kirjan pohjalta.",
        "D) Keksi ja kirjoita tarina ilman apuja.",
      ],
      vastaus: "B) Kuuntele ja kirjoita kuulemasi tarina.",
      SoundCloud: "",
    },
    {
      tehtNum: "21",
      tehtName: "Tiedostot",
      Kategoria: "Apinmaja",
      Kuvat: [
        "/src/assets/ApinmajaImages/DataKuva.webp",
        "/src/assets/ApinmajaImages/Käsitteet.webp",
        "/src/assets/ApinmajaImages/TekstinMuokkaamisenPerustoiminnot.webp",
      ],
      Tekstit: [
        "Tekstinkäsittelyohjelman avulla voit tehdä omia kirjoituksia, jotka ovat jo valmiiksi siistejä ja helposti luettavia. Kun harjoittelet eri näppäinten toiminnot, kirjoittamisesta tulee helppoa ja opit näppäilemään nopeasti.",
        "Kun käytät tekstinkäsittelyssä yleisesti Microsoftin Word-ohjelmaa tai Googlen Google Docsia, voit hyödyntää monia tehokkaita työkaluja tekstisi muotoiluun, kuvien lisäämiseen ja asiakirjojen jakamiseen. Molemmat ohjelmat tarjoavat helppokäyttöisiä toimintoja, joiden avulla voit luoda ammattimaisen näköisiä dokumentteja.",
      ],
      smallTitle: "Raahaa nimet paikoilleen!",
      Unity: "https://h5p.org/h5p/embed/571979",
      kysyms: "Mitä tekstinkäsittelyohjelmissa yleisesti tehdään?",
      vaihtoehdot: [
        "A) Piirretään ja muokataan kuvia",
        "B) Tehtäviä ja laskelmia",
        "C) Kirjoitetaan siistiä ja helppolukuista tekstiä",
        "D) Ohjelmoidaan tietokoneohjelmia",
      ],
      vastaus: "C) Kirjoitetaan siistiä ja helppolukuista tekstiä",
      SoundCloud:
        "https://soundcloud.com/marjopihlis/tehtava-2-tekstinkasittely/s-k1zcX",
    },
    {
      tehtNum: "22",
      tehtName: "Tiedostomuodot",
      Kategoria: "Apinmaja",
      youtube: "FXrM_YErETs",
      puolTekstit: [
        "Kannattaa tehdä oma kansio, jossa säilyttää itselle tärkeitä tiedostoja. Tiedostot löytyvät parhaiten kun ne on järjestetty ja nimetty.",
      ],
      Teksti:
        "Tiedostoja tallennetaan eri muodoissa. On esim. videotiedostoja, musiikkitiedostoja, tekstitiedostoja ja kuvatiedostoja. Saman aihepiirin tiedostot kannattaa tallentaa omaan kansioonsa.",
      puolKuvat: ["/src/assets/tiedostomuodot4.png.webp"],
      smallTitle: "Erilaisia tiedostomuotoja",
      kysyms: "Minkä tyyppisiä tiedostomuotoja voi olla?",
      vaihtoehdot: [
        "a) Vähentääkseen tietokoneen tallennustilaa",
        "b) Parantaakseen tiedostojen löydettävyyttä",
        "c) Estääkseen tiedostojen lataamisen",
        "d) Tehdäkseen tiedostoista näkymättömiä",
      ],
      vastaus: "b) Parantaakseen tiedostojen löydettävyyttä",
    },
    {
      tehtNum: "23",
      tehtName: "Tiedoston luominen ja talletus haluttuun sijaintiin",
      Kategoria: "Apinmaja",
      Tekstit: [
        "Tallentaminen on tärkeä taito!",
        "Kun tallennat, on tärkeää seurata, mihin olet tallentamassa.",
        "Tallentaa voi pilvipalveluun tai tietokoneen eri kohteisiin, kuten työpöydälle tai C- tai D-aseman kansioon.",
      ],
      numeroLista: [
        "Luo tiedosto ja etsi Tallenna -toiminto.",
        "Paina Tallenna nimellä -painiketta.",
        "Katso tarkasti, mihin sijaintiin työsi on mahdollista tallentaa.",
        "Nimeä työsi. Mieti sellainen nimi, että muistat seuraavalla kerralla työsi sen perusteella.",
        "Tallenna haluamaasi sijaintiin (kansioon, työpöydälle, pilvipalveluun).",
      ],
      Kuvat: [
        "/src/assets/ApinmajaImages/TallennaNimellä.webp",
        "/src/assets/ApinmajaImages/TallennusSijainti.webp",
        "/src/assets/ApinmajaImages/Työpöytä.webp",
      ],
      kysyms: "Miten tiedoston tallennusprosessi tyypillisesti etenee?",
      vaihtoehdot: [
        "A) Tallenna tiedosto ja nimeä se myöhemmin",
        "B) Luo tiedosto, etsi Tallenna-toiminto, paina Tallenna nimellä -painiketta, valitse sijainti ja nimeä tiedosto",
        "C) Kirjoita tiedosto ensin paperille ja skannaa se tietokoneelle",
        "D) Lähetä tiedosto sähköpostitse itsellesi",
      ],
      vastaus:
        "B) Luo tiedosto, etsi Tallenna-toiminto, paina Tallenna nimellä -painiketta, valitse sijainti ja nimeä tiedosto",
    },
    {
      tehtNum: "24",
      tehtName: "Kutsukortti",
      Kategoria: "Apinmaja",
      SoundClouds: [
        "https://soundcloud.com/digiseikkailu-oy/2-kutsukortti",
        "https://soundcloud.com/digiseikkailu-oy/2-invitation-card",
      ],
      puolKuva: "/src/assets/ApinmajaImages/Kutsukortti.png",
      puolTeksti:
        "Tarinassa käsitellään\n\nnäppäintaitoja tekstinkäsittelyohjelman käyttämistä",
      Tekstit: [
        "Sunnuntaina oli jännittävä päivä. Häsä ja isä hakivat laaman isolla pakettiautolla kotiin. Talon edessä laama hyppäsi autosta ulos ja kurkisti varovaisesti portista pihalle. Tämä olisi sen uusi koti. Sitä jännitti kauheasti.",
        "Pihalla istui ystävällisen näköinen koira, rodultaan japanilainen shiba inu. Laama mietti, miksi koira näytti niin tutulta. Jossain laama oli sen nähnyt aikaisemminkin, mutta missä?",
        "Doge — Tervetuloa, sinä olet varmaan Häsän perheen uusi laama. Minun nimeni on Doge, asun tuossa naapurissa.",
        "Laama — Kiitos, kyllä vain, olen laama. Hauska tutustua!",
        "Kun ihmiset lähtivät sisälle taloon, laama jäi seisomaan aitaukseensa. Vaikka se piti kovasti uudesta kodistaan ja uusista ihmisystävistään, se näytti murheelliselta aitauksessaan. Maassa oli Häsän vanha kannettava tietokone, ja sitä laama nyt tuijotti harmistuneena.",
        "Doge — Hei laama, onko jokin hätänä?, Doge kysyi huolestuneena.",
        "Laama — Minulla on lauantaina syntymäpäivät. Olisin halunnut kutsua naapuruston kaverit juhliin ja tutustua heihin paremmin, mutta en onnistu näillä sorkillani käyttämään tietokoneen näppäimistöä enkä tekstinkäsittelyohjelmaa.",
        "Doge — Älähän huolehdi, minä kyllä osaan kirjoittaa tietokoneella, Doge innostui. Sanot vain, mitä kirjoitetaan. Avaan tästä ensin tekstinkäsittelyohjelman!",
        "Laama — Voi kiitos Doge, mahtavaa! Aloitetaan tervehdyksellä. Kirjoita siihen, että “Hei naapuri!” Muista iso alkukirjain ja huutomerkki.",
        "Doge — Ei tämä olekaan niin helppoa, Doge ajatteli. Miten minä saan ne näppäimistöstä?",
        "Laama — Paina shift-näppäintä ja h-kirjainta samaan aikaan, niin saat ison H-kirjaimen. Huutomerkin saat, kun painat shiftiä ja numeroa yksi, Laama neuvoi.",
        "Doge — Onnistui! Mitä muuta kirjoitan?",
        "Laama — Paina ensin enter-näppäintä ja aloita uudelta riviltä. Kirjoita siihen: Tervetuloa syntymäpäiväjuhliini. Juhlat ovat ensi lauantaina kello 15.",
        "Doge — Hetkinen, hetkinen! Mistä saan numerot?, Doge kummasteli.",
        "Laama — Ne ovat siellä ylärivissä. Näetkö?",
        "Doge — Joo, nyt on kirjoitettu. Tuleeko tähän vielä muuta?",
        "Laama — Loppuun pitää vielä kirjoittaa, keneltä viesti on. Aloita taas uudelta riviltä ja kirjoita: Terveisin naapurisi Laama.",
        "Doge — Valmista tuli! Saanko minäkin tulla juhliisi?",
        "Laama — Tietysti saat tulla, siitä tulee hauskaa! Kiitos avusta, ilman sinua en olisi saanut kirjettä kirjoitettua!",
        "Doge — Ei kestä kiittää! Kutsut voi tulostaa tuolla Apin majassa ja minä voin viedä ne naapureille, Doge lupasi.",
        "Doge — Mitä ihmettä keksin laamalle lahjaksi?",
      ],
    },
    {
      tehtNum: "25",
      tehtName: "Tietokoneen laitteisto ja ohjelmisto",
      Kategoria: "Apinmaja",
      puolKuvat: [
        "/src/assets/ApinmajaImages/TietokoneenTyöpöytä.webp",
        "/src/assets/ApinmajaImages/Osoiterivi.webp",
        "/src/assets/ApinmajaImages/GoogleOsoiterivi.webp",
      ],
      puolTekstit: [
        "Tietokoneen työpöytä, Osoitinnuoli, Kansio, Selain, Roskakori, Windows “käynnistä”-nappi, Keskusyksikkö, Hiiri, Näppäimistö & Tietokoneen näyttö",
        "Osoiterivi, Verkkosivun osoite www.digiseikkailu.com, Avattu verkkosivu & Digiseikkailun etusivu",
        "Osoiterivi, Verkkosivun osoite www.google.com, Avattu verkkosivu – Googlen etusivu & Googlen hakukenttä",
      ],
      Tekstit: [
        "Laitteisto (hardware) Laitteisto tarkoittaa ulkoisia osia, jotka näkyvät käyttäjälle. Laitteistoja voi olla esim. tietokonelaitteisto, stereolaitteisto, auton ohjauslaitteisto.",
        "Ohjelmisto (software) Ohjelmisto on useista tietokoneohjelmista esim. peleistä, niiden käyttämistä tiedostoista muodostuva kokonaisuus joka toimii tietokoneen laitteiston sisällä.",
      ],
      kysymys: "Mikä seuraavista on esimerkki tietokoneen laitteistosta?",
      vaihtoehdot: [
        "A) Tietokoneohjelma",
        "B) Tiedosto",
        "C) Näppäimistö",
        "D) Käyttöjärjestelmä",
      ],
      vastaus: "C) Näppäimistö",
      Kuvat: [
        "/src/assets/ApinmajaImages/Hardware.webp",
        "/src/assets/ApinmajaImages/Hakukenttä.webp",
      ],
    },
    {
      tehtName: "Kutsukortti Laaman syntymäpäiville",
      tehtNum: "26",
      Kategoria: "Apinmaja",
      Kuva: "/src/assets/ApinmajaImages/Laama-kutsukortti.webp",
      Teksti:
        "Laama on tehnyt kutsukortin syntymäpäiville.<br><br>Selvitä seuraavat asiat.",
      numeroLista: [
        "Missä juhlat pidetään?",
        "Mihin aikaan Laama haluaa että vieraat ovat paikalla?",
        "Mitä Laama haluaa syntymäpäivälahjaksi?",
      ],
    },
    {
      tehtNum: "27",
      tehtName: "Mikä on internet",
      Kuva: "/src/assets/ApinmajaImages/pappa.webp",
      Kategoria: "Apinmaja",
      Tekstit: [
        "Nykyisin on vaikea kuvitella elämää ilman Internettiä.",
        "Tiedonhaku, musiikin kuunteleminen, elokuvien katselu ja ihmisten välinen viestiminen tapahtuu yhä suuremmaksi osaksi verkon kautta. Maailmassa ei ole yhtäkään maata, joka ei olisi liitettynä Internettiin ja verkkoon liitettyjä tietokoneita arvioidaan olevan reilusti yli 500 miljoonaa. Mutta mikä Internet siis on?",
        "Internet ei ole mikään yksi yhtenäinen verkko eikä yksi lukuisista erillisistä tiedonsiirtoverkoista vaan kaikkien yhteen liittyneiden palvelinten, verkkojen ja yksityisten käyttäjien muodostama maailmanlaajuinen tietoverkko.",
        "Kaikkia erillisiä verkkoja ja palvelimia yhdistävät samankaltaiset tekniset ominaisuudet, jotka mahdollistavat kaikkien verkkojen yhteiskäytön. Käyttäjän muodostaessa yhteyden Internettiin esimerkiksi selaimen avulla, ottaa käyttäjän tietokone yhteyden palvelimeen, jonka kautta voidaan taas muodostaa yhteys lukemattomiin muihin palvelimiin ja sivustoihin.",
        "Käytännössä tämä tarkoittaa samoja tiedonsiirtokäytäntöjä kuten HTTP (Hyper Text Transfer Protocol) tai erityisesti tiedostojen siirtämiseen käytettyä FTP:tä (File Transfer Protocol). Nämä sekä yleisesti käytössä oleva WWWprotokolla mahdollistavat koko Internetin sisällön käytön kaikille käyttäjille.",
        "HTTP-protokolla mahdollistaa esimerkiksi kuvan, tekstin, äänen ja animaation käytön eri sivustoilla, joiden avaamiseen taas käytetään ohjelmistoja, joita nimitetään selaimiksi. FTP-protokolla taas mahdollistaa tiedostojen siirtämisen palvelimen kautta toiselle ja edelleen yksittäiselle tietokoneelle.",
        "Internetin rungon muodostavat palvelimet eli serverit. Käytännössä palvelimet ovat samankaltaisia kuin PC-tietokoneet käyttömuisteineen ja kiintolevyineen, jotka mahdollistavat eri ohjelmistojen käytön tavalliselle Internetin käyttäjälle. Näitä ohjelmistoja ovat esimerkiksi sähköposti- tai selainohjelmisto, joiden kautta käyttäjä ottaa yhteyden palvelintietokoneeseen ja tätä kautta Internettiin. Palvelimen kautta käyttäjä ottaa yhteyden palvelintietokoneen ohjelmistoon, joka hakee käyttäjän tarkasteltavaksi esimerkiksi tietyn verkkosivuston. Kaikki nettisivustot ovat palvelimilla sijaitsevia HTML-muodossa olevia dokumentteja, jotka avataan esimerkiksi selaimen tai sähköpostiohjelman avulla.",
        "Lyhykäisyydessään yhteyden muodostaminen Internettiin tarkoittaa siis yhteyden ottamista palvelintietokoneeseen, jonka kautta käyttäjä voi taas ottaa yhteyden muihin palvelimiin tai sivustoihin. Jatkuvaa yhteyttä tiettyyn palvelimeen ei ole, vaan yhteys muodostetaan ainoastaan siksi aikaa, kun käyttäjä on aktiivinen kyseisellä palvelimella. Tätä kutsutaan asiakas/palvelin-periaatteeksi, joka osaltaan on varmistamassa erästä Internetin keskeistä periaatetta eli käyttäjien yhdenvertaista liikennöintiä verkossa.",
      ],
      kysymys:
        "Mikä tekninen protokolla mahdollistaa tiedostojen siirtämisen palvelimelta toiselle?",
      vaihtoehdot: ["a) HTTP", "b) FTP", "c) WWW", "d) HTML"],
      vastaus: "b) FTP",
    },
  ];

  return Tehtävät;
};
