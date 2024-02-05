import { Link } from "react-router-dom";

export const EmpatiaPolkuData = () => {
  const Tehtävät = [
    {
      tehtNum: "1",
      tehtName: "Peukkutehtävä 1",
      Kategoria: "EmpatiaPolku",
      Kuvat: ["/public/empatiapolku/peukkuohjeet.webp"],
      blueTitle: "Tweetyn viestiseinä",
      blueInfo:
        "Tässä on Tweety. Se hallinnoi kaupungin viestiseinää ja on laajan lintuverkoston ylläpitäjä. Ylläpitäjän tehtäviin kuuluu viestien tarkkaileminen ja sääntöjen vastaisten viestien poistaminen.",
      blueImage: "/public/empatiapolku/papukaija.webp",
    },
    {
      tehtNum: "2",
      tehtName: "Tehtävä 2",
      Kategoria: "EmpatiaPolku",
      videoUrl:
        "https://digiadventurers.com/wp-content/uploads/2019/10/720p-kopio.mov",
      Tekstit: [
        "Ota selvää mistä asiasta Tweety oli huolissaan?",
        "Tweety - Osaatteko sanoa, kuka tämän viestin on jättänyt tänne? Tweety kysyy kulmahöyhenet kurtussa.",
        "Häsä - Hmm.. katsotaan. En tunnista käsialaa, mutta tällaisen viestin ei pitäisi olla täällä kaikkien nähtävillä. Sehän on ilkeä, Häsä sanoo.",
        "Appi - Tämähän ei ole muuten edes ensimmäinen kerta! Poistetaan lappu, mutta pidetään se tallessa. Voimme tutkia sitä tarkemmin, jos pyydämme Dogen mukaan, Appi sanoo.",
        "Tweety - Ettehän silti anna typerien viestin pilata päivää. Palataan! Tweety visertää ja pyrähtää lintuverkoston kokoukseen.",
      ],
    },
    {
      tehtNum: "3",
      tehtName: "Tehtävä 3",
      Kategoria: "EmpatiaPolku",
      postitTeksti: "Mitkä viestit sinä poistaisit seinältä?",
      postit: [
        "/public/empatiapolku/hamis.png",
        "/public/empatiapolku/1.png",
        "/public/empatiapolku/2.png",
        "/public/empatiapolku/3.png",
        "/public/empatiapolku/4.png",
        "/public/empatiapolku/5.png",
        "/public/empatiapolku/6.png",
      ],
    },
    {
      tehtNum: "4",
      tehtName: "Tehtävä 4",
      Kategoria: "EmpatiaPolku",
      youtube: "VCqX0G-hQDo",
      Teksti: "Mikä on netiketti?",
    },
    {
      tehtNum: "5",
      tehtName: "Tehtävä 5",
      Kategoria: "EmpatiaPolku",
      youtube: "lekkpIfJ-Ec",
      Teksti: "Somekaveruus",
    },
    {
      tehtNum: "6",
      tehtName: "Tehtävä 6",
      Kategoria: "EmpatiaPolku",
      blueTitle: "Dogen boxi – Tehtävä 6",
      blueInfo:
        "Doge on Somen kaupungin tarkin uutistentutkija. Se etsii kuvia sukulaisistaan, joita on esiintynyt paljon meemeissä lähivuosina. Samalla se on oppinut erottamaan valeuutiset oikeista, ammattilaisten tekemistä uutisista. Se tietää myös miten erilaisiin viesteihin tulisi suhtautua.",
      blueImage: "/public/empatiapolku/dogekuva.webp",
      Tekstit: [
        "Appi - Doge, osaatko auttaa meitä? Katso tätä viestiä. Luultavasti sama kirjoittaja kirjoittaa tällaisia Tweetyn viestiseinälle, Appi aloittaa.",
        "Doge - Hmm… Viesti on anonyymi. Eli nimetön. En usko, että kenelläkään olisi rohkeutta omalla nimellään näin hmm.. erikoisia juttuja kirjoitella, Doge pohtii ääneen.",
        "Häsä - Miksi joku kirjoittaa näin ilkeästi? Katso tätä, selvää vihapuhetta! Häsä parahtaa.",
        "Doge - Syitä on monia. Joku saattaa kokea, että netissä voi purkaa ikäviä tunteitaan, kateutta, vihaa, ärsytystä tai katkeruutta ilman että siitä jää kiinni. Joskus monet aikuisetkaan eivät näytä nuorille hyvää esimerkkiä sosiaalisessa mediassa.",
        "Häsä - Ilkeän viestin kirjoittaja on siis ehkä itse harmissaan jostain, Häsä pohtii.",
        "Doge - Niin tai näin, minä otan nämä viestilaput nyt tutkintaan, Doge sanoo ja pujahtaa uutistoimistoa muistuttavaan koirankoppiinsa.",
      ],
      tarinaTeksti: "Juhlat voivat alkaa",
      juhlaTarinaKuva: "/public/empatiapolku/juhlat.webp",
    },
    {
      tehtNum: "7",
      tehtName: "Tehtävä 7",
      Kategoria: "EmpatiaPolku",
      youtube: "PuzagnhDiek",
      nappiTitle: "Sananvapaus tuo vastuuta!",
      Kuvat: ["/public/empatiapolku/Ilkeekissa.webp"],
      sininenNappi: "Mitä on vihapuhe?",
      buttonLink: "/tehtävät/tweetynviestiseinä/8",
    },
    {
      tehtNum: "8",
      tehtName: "Tehtävä 8",
      Kategoria: "EmpatiaPolku",
      Kuvat: ["/public/empatiapolku/frendit.webp"],
      sininenNappi: "Kehupuhe",
      buttonLink: "/tehtävät/tweetynviestiseinä/9",
    },
    {
      tehtNum: "9",
      tehtName: "Tehtävä 9",
      Kategoria: "EmpatiaPolku",
      blueTitle: "Laaman aitaus – Tehtävä 11",
      blueInfo:
        "Seuraavaksi kaverukset lähtivät Häsän pihalle. Siellä odotti Häsän lemmikki, Laama. Se on tunteikas ja herkkä otus ja erittäin innostunut uudesta puhelimestaan.",
      blueImage: "/public/empatiapolku/empatialaama.webp",
      Tekstit: [
        "Laama - Katso! Paljon hassuja palloja! Laama hirnui.",
        "Appi - Ne ovat emojeita, Appi naurahti. Niillä voi ilmaista erilaisia tunteita, sehän sopii sinulle hyvin! Kokeile!",
        "Laama - Näitä on helppo laittaa! Paljon helpompaa ja nopeampaa kuin kirjoittaminen sorkilla, Laama ilahtuu.",
        "Seuraavaksi alkaa kuulua viestien merkkiääniä.",
        "Häsä - Kiitos Laama, eivätköhän nämä viestit jo riitä, Häsä kikatti.",
        "Laama - Mutta ymmärtävätkö kaikki mitä minä tarkoitan? Laama jäi pohtimaan, kun Appi ja Häsä jatkoivat matkaa puhelimet nenässä kiinni.",
      ],
      kuvaTitle: "PEUKKUTEHTÄVÄ",
      Kuvat: [
        "/public/empatiapolku/peukut.webp",
        "/public/empatiapolku/peukkuohjeet2.webp",
      ],
    },
    {
      tehtNum: "10",
      tehtName: "Tehtävä 10",
      Kategoria: "EmpatiaPolku",
      kuvaTitle: "Miten viestin tunnelma muuttuu kun vaihdat emojia?",
      puhelimet: [
        "/public/empatiapolku/puhelin1.webp",
        "/public/empatiapolku/puhelin2.webp",
        "/public/empatiapolku/puhelin3.webp",
        "/public/empatiapolku/puhelin4.webp",
      ],
    },
    {
      tehtNum: "11",
      Kategoria: "EmpatiaPolku",
      blueTitle: "Häsän studio – Tehtävä 11",
      blueInfo:
        "Häsän huoneessa on erilaisia videokuvaamiseen liittyviä tavaroita, kuten vakain, kolmijalka ja kuvausvalo. Häsän äiti on alkanut kutsua sitä leikillään Häsän Studioksi. Viimein Häsä ja Appi pääsivät Häsän kotiin tekemään läksyjä. Tehtävien jälkeen Häsä selaili YouTube-kanavansa kommentteja.",
      blueImage: "/public/empatiapolku/nettisurffaus.webp",
    },
    {
      tehtNum: "12",
      tehtName: "Tehtävä 12",
      Kategoria: "EmpatiaPolku",
      puolvideo:
        "https://digiadventurers.com/wp-content/uploads/2019/10/1080p.mov",
      puolTeksti: "Millaisia tunteita eri kommentit aiheuttivat Häsässä?",
      Tekstit: [
        "Häsä - Taas näitä ilkeitä kommentteja! Katso nyt tätäkin. “Tyhmä video ja vielä tyhmempi tekijä! Lopeta typerät videosi!”",
        "Appi - Onko tuo mielipide sinusta hyvin perusteltu? Antaako se kommentoijasta järkevän kuvan? Appi kysyy pieni virne kasvoillaan.",
        "Häsä - No ei kyllä. Hän ei edes perustele, miksi on tuota mieltä. Jokaisen pitäisi miettiä, kuinka paljon aikaa ja vaivaa videoiden tekeminen vaatii. On liian helppoa kommentoida latistavasti ilman kunnon perusteluita.",
        "Appi - Ja antaa kyllä erikoisen kuvan ihmisestä. Hän voisi antaa vaikka parannusehdotuksia eikä haukkua, Appi pohdiskeli ääneen.",
        "Häsä - Täällä on myös kannustavia kommentteja, Häsä ilahtuu.",
        "Appi - Hyvä Häsä, Appi tokaisee. Kaikkia ei voi koskaan miellyttää, eikä tarvitsekaan.",
        "Häsä - Mitähän tekemästäsi SuperSovelluksesta sanotaan sovelluskaupan palautteissa, Häsä kysäisi.",
        "Appi - Ai niin, mennään katsomaan, Appi huudahti!",
      ],
      tarinaNappi: "Trollipostia SuperSovellukselle",
      buttonLink: "/tehtävät/dogenboxi/6",
      tarinaKuva: "/public/empatiapolku/trolliposti.webp",
    },
    {
      tehtNum: "13",
      tehtName: "Tehtävä 13",
      Kategoria: "EmpatiaPolku",
      Kuvat: ["/public/empatiapolku/noita.webp"],
      sininenNappi: "Trolli, provo ja fleimaus",
      buttonLink: "/tehtävät/dogenboxi/7",
    },
    {
      tehtNum: "14",
      tehtName: "Tehtävä 14",
      Kategoria: "EmpatiaPolku",
      Kuvat: ["/public/empatiapolku/zombi2.webp"],
      sininenNappi: "Trolli kommentoimassa",
      buttonLink: "/empatiapolku/trolli-kommentoimassa",
    },
    {
      tehtNum: "15",
      tehtName: "Tehtävä 15",
      Kategoria: "EmpatiaPolku",
      Kuvat: ["/public/empatiapolku/ilmoitustaulu.webp"],
      sininenNappi: "Mielipidekirjoitus",
      buttonLink: "/tehtävät/tweetynviestiseinä/21",
    },
    {
      tehtNum: "16",
      tehtName: "Tehtävä 16",
      Kategoria: "EmpatiaPolku",
      Kuvat: ["/public/empatiapolku/muistio.webp"],
      sininenNappi: "Parannusehdotus",
      buttonLink: "/tehtävät/tweetynviestiseinä/20",
      PeukkuKuva: "/public/empatiapolku/peukut.webp",
      peukkuKuva: "/public/empatiapolku/peukkuOhjeet3.webp",
    },
    {
      tehtNum: "17",
      tehtName: "Tehtävä 17",
      Kategoria: "EmpatiaPolku",
      blueTitle: "Kursorin ullakko – Tehtävä 17",
      blueInfo:
        "Taitava Kursori-pappa Häsän naapurista oli korjannut Apin rikkimenneen puhelimenlasin.\n Häsä ja Appi kävivät hakemassa puhelimen takaisin ja vaihtoivat kuulumisia Kursorin kanssa.",
      blueImage: "/public/empatiapolku/kursorikuva.webp",
    },
    {
      tehtNum: "18",
      tehtName: "Tehtävä 18",
      Kategoria: "EmpatiaPolku",
      puolvideo: "https://digiadventurers.com/mov/720p-kopio.mov",
      puolTeksti: "Tutki viestittelyä.\nMistä asiasta Kursori on huolissaan?",
      Tekstit: [
        "Appi — Kiitos Kursori, olet supervaari, Appi kiitti saadessaan puhelimen.",
        "Kursori — Eipä kestä. Mukavasti aika kuluu näitä korjaillessa. Voisitteko te puolestanne helppiä minua. Katsokaas kun tuossa pihakadulla kuulin ihmeellistä kikatusta, kun kävin torilla muorille kukkia ostamassa. Siellä nuoret höpisivät jostain “Karjuva Kursori -videosta”. Että olen kuulemma tubetähti, Kursori kuulosti huolestuneelta.",
        "Appi — Hmm.. kuulostaa erikoiselta. Eihän kenenkään pitäisi olla tubetähti siitä itse tietämättä tai sitä haluamatta, Appi parahti.",
        "Häsä — Älä sinä huoli tästä enempää, Kursori, me selvitämme samalla tämänkin, Häsä sanoi Kursorille päättäväinen ilme kasvoillaan.",
        "Kursori — En minä oikeastaan haluaisi esiintyä videolla. Se ei ole ollenkaan minun tyyppistäni musiikkia. Sitä paitsi karjaisin vähän turhan kiukkuisesti Miuku-Maukulle, en ollut oikeasti niin vihainen kuin videosta voisi luulla, Kursori harmitteli.",
        "Appi — Bändin jäsenet valitsivat oikein. Kenenkään ei kuulu olla YouTube-tähti ilman omaa lupaa.",
        "Häsä — Empatia tarkoittaa kykyä ymmärtää mitä toinen ihminen kokee tämän näkökulmasta, eli itsensä asettamista toisen henkilön asemaan. Havu, Paju ja Eko olivat rohkeita kun pyysivät anteeksi ja poistivat videon.",
      ],
      TarinaKuvat: [
        "/public/empatiapolku/vihainenpappa.webp",
        "/public/empatiapolku/ovelakissa.webp",
      ],
      TarinaOtsikot: [
        <Link to="/tehtävät/laamanaitaus/5">
          Huono-onninen videotähti Osa 1
        </Link>,
        <Link to="/tehtävät/laamanaitaus/7">
          Huono-onninen videotähti Osa 2
        </Link>,
      ],
      TarinaTekstit: ["", ""],
      loppuTeksti: <Link to="/tietoa-opettajalle"> Tietoa opettajille</Link>,
    },
  ];
  return Tehtävät;
};
