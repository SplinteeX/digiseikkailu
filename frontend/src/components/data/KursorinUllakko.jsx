export const KursorinUllakkoData = () => {
  const Tehtävät = [
    {
      tehtNum: "1",
      tehtName: "Kursorin Ullakko",
      Kategoria: "KursorinUllakko",
      puolKuvat: [
        "/KursorinImages/Ruokailu.webp",
        "/KursorinImages/PöydässäTekstailu.webp",
        "/KursorinImages/KaiuttimenKäyttö.webp",
        "/KursorinImages/Sähköpostit.webp",
        "/KursorinImages/KatsoHenkilöä.webp",
        "/KursorinImages/IsotKirjaimet.webp",
        "/KursorinImages/PuhelinPiiloon.webp",
        "/KursorinImages/Vastaa.webp",
        "/KursorinImages/Lyhyet.webp",
        "/KursorinImages/PidäÄänettömällä.webp",
        "/KursorinImages/PuhelinKävellessä.png.webp",
        "/KursorinImages/Musiikki.webp",
        "/KursorinImages/Puhelut.webp",
        "/KursorinImages/ÄläHäiritse.webp",
        "/KursorinImages/Vältä.webp",
        "/KursorinImages/Pidä.webp",
      ],
      puolTekstit: [
        "Ruokailu\n\nKaikki esineet, jotka eivät liity ruokaan tai kattaukseen tulisi pitää poissa pöydältä: avaimet, pikkulaukut, aurinkolasit, ja ennen kaikkea puhelimet.",
        "Älä tekstaile pöydässä!\n\nJos olet tilanteessa, jossa pahoittelisit kohteliaasti mennäksesi vessaan, sinun tulisi poistua kohteliaasti myös ennen kuin tartut puhelimeesi.",
        "Kaiuttimen käyttö\n\nKerro puhujalle, että sinulla on kaiutin päällä. Älä käytä kaiutinta, ellet ole toimistolla kokouksessa, johon joku osallistuu etänä. Varoita puhujaa siitä, että muita on läsnä ja sulje ovi. Kaiuttimen pitäminen täysillä silloin, kun tarkistat ääniviestejäsi, on ärsyttävyyden huippu.",
        "Sähköpostit asiallisesti\n\nÄlä lähetä sähköpostia, jossa sanot vain ”Moi!” Jos sinulla ei ole muuta sanottavaa sähköpostivastauksessasi kuin ”Kiitos!”, älä lähetä sitä. Täytät vain toisten Saapuneet-kansiota.",
        "Katso henkilöä eikä kännykkää!\n\nPidä puhelin poissa, kun keskustelet kasvotusten. Kun keskustelet jonkun kanssa kasvotusten, älä vilkuile samalla puhelintasi nähdäksesi, kuka yrittää tavoitella sinua.",
        "Isot kirjaimet ja liitteet harkiten!\n\nMitä ei pidä tehdä kirjoittaessaan sähköpostia: huutaa käyttämällä pelkkiä isoja kirjaimia, käyttää värillisiä fontteja ja hymiöitä, liittää viestiin isoja liitetiedostoja, lähettää viestiä eteenpäin, ellei se ole perusteltua.",
        "Puhelin piiloon ja ole läsnä\n\nKunnioita opettajaa ja vanhempiasi käytöksellä. Älä tarkista henkilökohtaisia laitteitasi sellaisen kokouksen oppitunnin tai kokouksen aikana, johon osallistuu opettajasi, vanhempasi joku muu joka yrittää keskustella kanssasi.",
        "Vastaa asiallisesti\n\nerro puhelimeen nimesi. Älä vastaa vain “Moi!” tai “Haloooo?” Kun vastaat puhelimeen vaikka toisen ihmisen puhelimeen, kerro nimesi ja kenen puhelimeen henkilö on soittanut: ”Hannelen puhelimessa Jennifer paikalla.”",
        "Lyhyet ääniviestit\n\nKun jätät ääniviestiä, kerro koko nimesi ja numerosi. Kerro ytimekkäästi, miksi soitat. Toista ensimmäinen vaihe ja hyvästele. Pidä viesti hyvin lyhyenä.",
        "Pidä äänettömällä koulussa\n\nPidä puhelimesi äänettömällä. Jos jätät kännykkäsi laatikkoosi/putpettiisi, laita se äänettömälle. Varsinkin jos soittoäänesi on jokin räväkkä rokkibiisi.",
        "Puhelin kävellessä?\n\nSeuraa liikennettä äläkä selaa puhelintasi. Nosta pääsi havainnoimaan kadun ylityksissä jotta et jäisi auton alle. Pysyttele jalkakäytävän oikealla reunalla äläkä tee äkkipysähdyksiä. Älä pysähdy tekstaamaan tai tarkistamaan sähköpostia kun ylität tietä!",
        "Musiikki vain omille korville\n\nÄlä soita musiikkia liian kovalla. Jos käytät soitintasi korvanappien kanssa, lähelläsi olevat henkilöt kuulevat soittolistasi ja se kuulostaa siltä kuin DJ:nä toimisi pieni ärsyttävä kärpänen! Musiikkia kuunnellessa on hyvä ottaa muut huomioon, etenkin julkisissa tiloissa.",
        "Puhelut ja viestit omana tietona\n\nVältä julkisia puhelinkeskusteluja varsinkin salaisista asioistasi. Älä puhu puhelimeen odotustilassa, hotellin uloskirjautumisjonossa, ravintolassa, junassa tai, luoja varjelkoon, vessakopissa. Älä näytä henkilökohtaisia viestejäsi tai toisten kirjoittamia viestejä muille.",
        "Älä häiritse viestittelemällä\n\nNoudata tätä pikaviestinnän etikettiä. Kysy aina, onko nyt hyvä hetki chattailla. Ota huomioon toisten ihmisten aikataulut ja nukkumaanmenoajat.",
        "Vältä huutamasta puhelimeen\n\nÄlä huuda puhelimeen. Vaikka sinä et kuulisikaan linjan toisessa päässä olevaa henkilöä kovin hyvin, se ei tarkoita sitä, ettei hän kuulisi sinua.",
        "Pidä rajat mediassa\n\nMieti tarkkaan, mitä kirjoitat. Älä kirjoita sosiaaliseen mediaan arkaluontoisia henkilökohtaisia asioita, varsinkin jos koulukaverisikin voivat lukea kirjoituksesi.",
      ],
      kysymys: "Mikä on epäkohteliasta sähköpostin kirjoittamisessa?",
      vaihtoehdot: [
        "A. Käyttää vain pieniä kirjaimia.",
        "B. Kirjoittaa pitkiä kappaleita.",
        "C. Käyttää vain isoja kirjaimia ja värikkäitä fontteja.",
        "D. Liittää tarvittavia liitetiedostoja.",
      ],
      vastaus: "C. Käyttää vain isoja kirjaimia ja värikkäitä fontteja.",
    },
    {
      tehtNum: "2",
      tehtName: "Omat mediat pohdinnassa",
      Kategoria: "KursorinUllakko",
      Kuva: " /KursorinImages/OmatMediatPohdinnassa.webp",
      Tekstit: [
        "Mitä kaikkea media tarkoittaa? Joukkotiedotusvälineenä median historiallisina vaiheina voidaan nähdä huhu, julkiset kuulutukset, julkiset kokoontumiset, kirjapainotaito.  Nykymedia tarkoittaa lehtiä, elokuvia, radiota, televisiota, satelliittitelevisiota ja monen edellisten yhdentymisenä, internettiä. Mitä tarkoittaa sinun mediasi?",
        "1. Listaa karttaan kaikki median muodot mitä käytät.\n\nNetti – mitä teet netissä? radio – mitä kuuntelet? tv – mitä katsot? sanomalehdet – mitä lehtiä luet?",
        "2. Listaa suosituimmat sovelluksesi puhelimesta.\n\nKerro miksi käytät juuri niitä?",
        "3. Missä käytät suosikkimedioitasi?\n\nkotona/koulussa/kavereiden kanssa/harrastuksissa jne.",
        "4. Miksi käytät mediaa?\n\nPohdi ja kirjoita/piirrä mihin tarkoitukseen mitäkin mediaa käytät? Haluatko: näkyä/kuulua? vaikuttaa asioihin? löytää samankaltaisia/keskustella? viihtyä ja kuluttaa aikaa?",
        "5. Minkälaisena sinun oma mediajälkesi näyttäytyy?\n\nGooglaa itsesi omalla nimelläsi. Mihin palveluihin olet kommentoinut? Mistä kuviasi voi löytää? Pohdi, tiedätkö tarkasti kaikista käyttämistäsi palveluista säännöt ja tietosuojakäytänteet?",
        "6. Tee karttasi joko paperille piirtäen tai digiposterina ajatuskarttasovelluksena.\n\nHyviä ajatuskarttasovelluksia ovat mm. Popplet, Mindmup ja MindMeister",
      ],
      kysymys: "Miksi on tärkeää tarkastella omaa mediankäyttöä?",
      vaihtoehdot: [
        "a) Parantaakseen teknisiä taitoja",
        "b) Ymmärtääkseen median vaikutuksen arkielämään",
        "c) Oppiakseen uusia pelejä",
        "d) Seuraamaan trendejä",
      ],
      vastaus: "b) Ymmärtääkseen median vaikutuksen arkielämään",
    },
    {
      tehtNum: "3",
      tehtName: "Pling, pling! - Tarina",
      Kategoria: "KursorinUllakko",
      SoundClouds: [
        "https://soundcloud.com/digiseikkailu-oy/kursorin-ullakko-3-bling-bling-fin?in=digiseikkailu-oy/sets/digiseikkailu-uudet-tarinat&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
        "https://soundcloud.com/digiseikkailu-oy/17-pling-pling-eng",
      ],
      puolTeksti:
        "Tarinassa käsitellään puhelimen kohteliasta käyttöä sosiaalisissa tilanteissa. Viriketulvan rajoittamista ja nettiriippuvuutta.",
      puolKuva: " /KursorinImages/Tarina.webp",
      Tekstit: [
        "Laaman uusi agilityvideo oli valmis. Tällä kertaa videosta tulisi parempi ja se voitaisiin julkaista hyvillä mielin. Häsä ja Appi olivat vieneet Laaman agilityradalle ja opettaneet sille muutaman tempun. Se oli oppinut ne jotenkuten, vähän hitaasti ja vaivalloisesti, mutta ruokapalkkio oli toiminut hyvänä kannustajana.",
        "Videon viimeistely oli tehty huolella. Appi oli kuvannut Laaman temppuja puhelimellaan ja Häsä oli kertonut videolla, miten agilityharrastus toimii. Kotona Häsä ja Appi olivat vieneet kuvatut otokset videoeditoriin ja muokanneet niistä tosi mielenkiintoisen videon. Siihen oli lisätty taustamusiikkia, otsikoita ja siirtymiä. Myös äänenlaatua ja värejä oli paranneltu. Kun video oli valmis, Häsä latasi sen Youtubeen.",
        "Häsä vilkaisi puhelintaan ja huomasi, että äidiltä oli tullut tekstiviesti.",
        "Äiti — Häsä ja Appi, tulkaahan syömään. Tubettajatkin tarvitsevat välillä ravintoa!",
        "Lapset lähtivät syömään, mutta matkalla Häsän puhelin piippasi taas. WhatsAppiin oli ilmestynyt punainen rinkula, jonka sisällä oli numero seitsemän. Luokan viestiryhmässä oli uusia viestejä: “Kuka lähtee huomenna koulun jälkeen luistelemaan?”, kysyi Maria, Häsän paras kaveri koulussa. Maria oli saanut kuusi innostunutta vastausta, mutta Häsä ei nyt ehtinyt vastata, hänen piti kiirehtiä syömään.",
        "Ruokana oli makaronilaatikkoa, lasten herkkua. Muuten mukavan lounastuokion keskeytti kuitenkin jatkuva pirinä ja piippaus, joka kuului Häsän taskusta. Hän ei voinut vastustaa kiusausta, vaan kurkkasi aina äänimerkin jälkeen, mitä uutta puhelimeen oli ilmestynyt. Luistelukeskustelu jatkui kiivaana ja punainen ympyrä oli ilmestynyt myös YouTuben, sähköpostin ja Instagramin kuvakkeisiin. Kaikki halusivat kommentoida Laaman agilityvideota ja siitä julkaistuja kuvia. Opettajakin lähetti sähköpostilla ohjeita seuraavan päivän tehtävistä. Häsästä tuntui, että kaikkiin viesteihin piti vastata heti. Muutenhan hänen seuraajansa saattaisivat perua tilauksensa.",
        "Häsä keskittyi viesteihin ja ruoka lautasella jäähtyi. Yhtäkkiä hänestä tuntui, että tunnelma keittiössä oli muuttunut. Äiti ja Appi katsoivat Häsää huolestuneina.",
        "Äiti — Eikö ruoka maistu? äiti kysyi. Minä kun luulin, että makaronilaatikko on bravuurini.",
        "Apin lautanen oli tyhjä. Hän oli syönyt jo kaksi annosta ja odotti nyt, että Häsäkin saisi lautasen tyhjäksi ja he pääsisivät ulos leikkimään.",
        "Häsää alkoi nolottaa. Hän ymmärsi, ettei ollut keskittynyt lainkaan ruokailuun tai äidin ja Apin kanssa keskusteluun, vaan oli ollut liian kiireinen vastailemaan viesteihin. Muutenkin koko viestitulva alkoi jo väsyttää, Häsä kaipasi raitista ilmaa.",
        "Häsä — Olen pahoillani, taisin unohtaa hyvät käytöstavat, Häsä sanoi surkeana. Viestit tuntuivat niin tärkeiltä ja kiireisiltä.",
        "Äiti — Ei se mitään, Häsä. Syö nyt ruokasi loppuun, ennen kuin se jäähtyy kokonaan. Viestit kyllä odottavat siellä puhelimessa. Kaikkeen ei tarvitse vastata juuri samalla sekunnilla, äiti muistutti.",
        "Appi — Nyt pidät vähän taukoa puhelimesta ja mennään tekemään jotain hauskaa ulkona! Appi kehotti.",
      ],
    },
    {
      tehtNum: "4",
      tehtName: "Ruutuaika",
      Kategoria: "KursorinUllakko",
      mp4: "/KursorinImages/Ruutuaika-1.mp4",
      mp4Teksti:
        "Pysähdytään videon avulla pohtimaan yhdessä, milloin olisi hyvä laittaa puhelin pois ja keskittyä muihin asioihin.",
      Tekstit: [
        "Tehtävä \n \n seurataan, miten paljon aikaa käytetään puhelimella tai tietokoneella viikon ajan. Tämä auttaa sinua ymmärtämään, mihin kaikkeen käytät digitaalisia laitteita ja kuinka kauan.",
        "Ruutuaika-tracker: Näin Seuraat Digitaalisen Median Käyttöäsi",
        "1. Kirjaa ylös sovellusten käyttö \n \n Joka päivä, kirjoita ylös, kuinka monta kertaa käytät eri sovelluksia. Sovelluksia ovat esimerkiksi pelit, viestisovellukset tai YouTube.",
        "2. Kuinka kauan käytät sovellusta \n \n Merkitse kuinka kauan vietät aikaa kullakin sovelluksella. Voit katsoa kellosta, kun aloitat ja kun lopetat.",
        "3. Mihin tarkoitukseen käytät sovelluksia \n \n Kirjoita ylös, mihin käytät eri sovelluksia. Esimerkiksi: pelaatko pelejä, etsitkö tietoa, jutteletko kavereiden kanssa tai katsotko videoita.",
        "4. Kirjoita tiedot johonkin \n \n oit kirjoittaa nämä tiedot vihkoon, tietokoneelle tai käyttää erityistä sovellusta, joka auttaa seuraamaan ruutuaikaa.",
        "Tämä tehtävä auttaa sinua näkemään, paljonko aikaa käytät digitaalisiin laitteisiin ja mitä kaikkea teet niillä. Se auttaa sinua päättämään, haluatko käyttää niitä vähemmän tai eri tavalla. Muista, että on tärkeää pitää aikaa myös muille hauskoille jutuille, kuten ulkoilulle, lukemiselle tai leikkimiselle!",
      ],
      kysymys:
        "Miksi on hyvä tietää, paljonko käytät aikaa digitaalisten laitteiden parissa?",
      vaihtoehdot: [
        "a) Jotta voit käyttää niitä enemmän",
        "b) Koska se auttaa sinua hallitsemaan aikaasi paremmin",
        "c) Koska digitaalisten laitteiden käyttö on aina huono asia",
        "d) Koska aikuiset haluavat tietää",
      ],
      vastaus: "b) Koska se auttaa sinua hallitsemaan aikaasi paremmin",
      textWithTitle: [
        {
          title:
            "Ruutuaika-tracker: Näin Seuraat Digitaalisen Median Käyttöäsi",
          text: "1. Kirjaa ylös sovellusten käyttö: Joka päivä, kirjoita ylös, kuinka monta kertaa käytät eri sovelluksia. Sovelluksia ovat esimerkiksi pelit, viestisovellukset tai YouTube.",
        },
      ],
    },
    {
      tehtNum: "5",
      tehtName: "Kursorin Ullakko",
      Kuva: "/KursorinImages/Someriippuvuus.webp",
      Kategoria: "KursorinUllakko",
      Tekstit: [
        "Someriippuvuudella voidaan tarkoittaa sitä, että ihminen viettää aikaa somessa niin paljon, että toiminta muuttuu yksilölle ja ympäristölle haitalliseksi, esim. aiheuttaa kolareita liikenteessä tai saa ihmisen ahdistumaan median sisällöistä Some tulee sanasta sosiaalinen media ja usein sosiaalisesta mediasta puhuttaessa keskitytään yhteisöpalveluihin kuten Facebookiin, Instagramiin, Snapchattiin tai muihin paljon käytettyihin sovelluksiin Someriippuvuudeksi voidaan lukea, että yksilö tekee päivityksiä jatkuvasti eikä pysty olemaan päivittämättä. Toinen someriippuvuuden muoto on se, että selailee somea kykenemättä lopettamaan. Somessa voi tehdä monenlaisia asioita, jotka voivat olla aktivoivia kuten juuri päivitysten tekeminen, tai passiivisempia kuten toisten toiminnan seuraaminen.”",
        "Miten lievittää someriippuvuutta?",
        "1. Säädä piippaavat hälytykset ja bannerit pois.\n\n Säädä puhelimesi niin, ettei siihen tule piippaavia ilmoituksia vaikkapa iltakahdeksan jälkeen. Sinun on saatava lepohetkiä sosiaalisesta mediasta. On normaalia olla välillä myös offline.",
        "2. Kirjaa ylös viettämäsi tunnit somessa.\n\n Kirjaa ylös siellä viettämäsi tunnit. Siitä näet, kuinka isosta ongelmasta on kyse. Neljä tuntia somea päivässä on jo paljon, kaksi tuntia päivässä ei ehkä ihan niin paha.",
        "3. Pidä taukoa.\n\n Siirrä esim. aplikaatiot pois puhelimen etusivulta: Kokeile “somepaastoa” siirtämällä eniten aikaavievät aplikaatiot pois puhelimen aloitussivulta.",
        "4. Tiedosta harha “paitsijäämisen pelko” jonka some monelle aiheuttaa.\n\n Jo kahdenkymmenen somessa vietetyn minuutin jälkeen ihmisille tulee tunne, etteivät he ole tehneet riittävästi, että he ovat jääneet paitsi jostain tai että he ovat huonompia kuin muut. Keskeisenä tunteena on se, että jää jostain paitsi. Tulee paniikki, että mitä minulta jää kuulematta, näkemättä tai lukematta. Näin ei kuitenkaan ole, sillä some saa ihmisen luulemaan, että hänen pitäisi tehdä yhtä paljon ja hauskoja asioita kuin kaikki seurattavat yhteensä.",
        "5. Sovi itsesi kanssa ajat jolloin saat käyttää somea.\n\n Vähentämisen voi aloittaa vaikka niin, että määrittelee itselleen tiettyjä aikoja tai tilanteita, joissa ei käytä somea ollenkaan. Tietyn kellonajan jälkeen ei anneta itsensä avata enää sosiaalista mediaa.",
        "6. Suhtaudu kriittisesti ja pohdi toiminnan vaikutuksia itseesi.\n\n Some on yhä niin uusi ja jännittävä osa elämäämme, ettei sen ongelmallisuuteen ole vielä herätty. Siksi someriippuvuudet ja -ongelmatkin ovat meillä vielä uusia. Myös tupakointia hehkutettiin aikanaan ja pidettiin hienona juttuna. Kukaan ei ajatellut sen vaaroja.",
      ],
      kysymys: "Miksi on tärkeää rajoittaa sosiaalisen median käyttöä?",
      vaihtoehdot: [
        "a) Koska se on aina tylsää",
        "b) Jotta on aikaa myös muille tärkeille asioille elämässä",
        "c) Koska sosiaalinen media ei ole ollenkaan hauskaa",
        "d) Koska aikuiset sanovat niin",
      ],
      vastaus: "b) Jotta on aikaa myös muille tärkeille asioille elämässä",
    },
    {
      tehtNum: "6",
      tehtName: "Kahden päivän haaste",
      Kategoria: "KursorinUllakko",
      SoundClouds: [
        "https://soundcloud.com/digiseikkailu-oy/kursorin-ullakko-6-kahden-paivan-haaste-fin?in=digiseikkailu-oy/sets/digiseikkailu-uudet-tarinat&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
        "https://soundcloud.com/digiseikkailu-oy/5-a-two-day-challenge",
      ],
      puolKuva: "/KursorinImages/KahdenPäivänHaaste.webp",
      puolTeksti:
        "Tarinassa käsitellään\n\ndigi- ja medialaitteiden historiaa ja pohditaan, millaista elämä olisi ilman digilaitteita. Voiko ilman digilaitteita selvitä?",
      Tekstit: [
        "Appi ja Häsä istuivat pihakeinussa. Oli kaunis kesäpäivä, mutta lapsilla oli tylsää.",
        "Appi — Ei ole mitään tekemistä, Appi valitti.",
        "Häsä — Hei, minä keksin! Lähdetään pyöräilemään, Häsä ehdotti.",
        "Appi — Hyvä idea, Appi innostui ja juoksi hakemaan pyöräänsä.",
        "Appi ponkaisi pyörän selkään ja kurvasi vauhdilla kadulle. Samassa kuului kolahdus ja heti perään ilkeä räsähdys – jotain tipahti Apin taskusta asvaltille. Appi jarrutti ja kääntyi katsomaan.",
        "Appi — Voi kurjuus, uusi älypuhelimeni tippui ja näyttö on nyt tuhansina sirpaleina, Appi parkaisi.",
        "Häsä hyppäsi pyörän selästä ja alkoi kerätä puhelimen palasia kadulta.",
        "Häsä — Ei hätä ole tämän näköinen, mennään kysymään Kursorilta, jos hän osaisi korjata puhelimesi, Häsä lohdutti.",
        "Kursori, oikealta nimeltään Kari Kursonen, asuu Häsän ja Apin naapurissa ja on kuuluisa valtavasta tekniikkavarastostaan. Kursorin ullakolta löytyvät kaikki mahdolliset laitteet ja vekottimet, myös ikivanhoja televisioita ja lankapuhelimia ajalta ennen kännyköitä. Kokoelman erikoisuus on Commodore 64 -tietokone kaukaiselta 1980-luvulta. Kursori osaa myös korjata melkein mitä vain.",
        "Häsä ja Appi nousivat portaat talon ovelle ja soittivat Kursorin ovikelloa. Hetken kuluttua ovi avautui raolleen ja ensimmäisenä näkyviin tulivat Kursorin isot silmälasit.",
        "Kursori — No hei lapsukaiset, tulkaa peremmälle!, Kursori toivotti iloisesti. Tarjoan teille mehua ja korppuja.",
        "Sisällä Kursori huomasi, että Apin silmät olivat kyynelissä.",
        "Kursori — Mikä hätänä, Appi? Miksi sinulla on paha mieli?, Kursori kysyi.",
        "Appi näytti rikkoutunutta puhelintaan ja nyyhkytti:",
        "Appi — Upouusi puhelimeni tippui kadulle ja särkyi. Mitä minä nyt teen?",
        "Kun Appi ja Kursori tutkivat puhelinta, Häsä livahti ullakolle ihmettelemään vanhoja kapistuksia. Ne olivat hurjan kiinnostavia: pöydällä oli vanha faksi, painavan näköinen NMT-puhelin, Sony Walkman –kasettinauhuri ja kasa korppuja, joita ei ollut tarkoitettu syötäväksi.",
        "Häsä — Mihin ihmeeseen näitä laitteita on käytetty?, Häsä mietti.",
        "Kursori käänteli puhelimen kappaleita käsissään ja totesi lopulta:",
        "Kursori — Kyllä tästä vielä toimiva saadaan, mutta minulla ei juuri nyt ole kaikkia tarvittavia osia. Pärjäisitkö pari päivää ilman puhelinta, Appi? Tule ylihuomenna, siihen mennessä puhelin on taas kunnossa.",
        "Appi ilahtui, Kursoriin voi aina luottaa! Mutta hetkinen, kaksi päivää ilman puhelinta… Miten hän selviäisi?",
      ],
    },
    {
      tehtNum: "7",
      tehtName: "Päivä ilman älypuhelinta ja internettiä",
      Kategoria: "KursorinUllakko",
      Kuva: "/KursorinImages/PäiväIlmanPuhelinta.webp",
      Tekstit: [
        "Kahden päivän haaste\n\nMillaista oli aika ennen älypuhelimia?",
        "Kirjoita haasteestasi päiväkirjaa ja kerro koulussa, miten pärjäsit ja mitä uutta kenties koit ja huomasit.",
        "Kirjoita päiväkirjaa seuraavasti\nHuomasin, että kun älypuhelin ja internet jäivät hetkeksi pois, niin…\n---------------\n---------------\n---------------",
      ],
      numeroLista: [
        "Sovi vanhempiesi kanssa, että kännykkää saa käyttää vain tosi tarpeeseen ja jos on pakko soittaa. Muuten yritetään leikkiä sitä aikaa, jolloin kännyköitä ei ollut.",
        "Yritä selvitä kaksi päivää ilman YouTubea, pelejä, sosiaalista mediaa.",
        "Kun istut bussissa tai metrossa tms. liikenteessä, seuraa ihmisiä ja maisemia kännykkäpelien sijasta.",
        "Kun olet kotona, juttele perheesi kanssa ja kysy mitä heille kuuluu. Kerro omista päivän kuulumisistasi.",
        "Mene lähiluontoon ja istahda hetkeksi paikoillesi. Annan luonnon äänien olla musiikkia korvillesi. Katsele rauhassa eläimiä, lintuja, hyönteisiä ja kukkia.",
        "Onko tylsää? Tee jotain käsilläsi. Leivo vanhempien tai sisarustesi kanssa, tee käsitöitä tai rakenna jotain.",
        "Lue mielenkiintoista kirjaa. Lähde ulos pelaamaan pallolla tai lennättämään omatekoista leijaa tai lennokkia. Ennen kaikki tehtiin itse omasta päästä keksimällä, kokeile sinäkin!",
        "On hyvä, että välillä osaa rauhoittua ja antaa tylsänkin hetken tulla. Kun tylsä hetki tulee, voimme käyttää mielikuvitusta ja ajatella jotain mukavaa asiaa.",
      ],
      kysymys:
        "Miksi voisi olla hyvä viettää päivä ilman älypuhelinta ja internettiä?",
      vaihtoehdot: [
        "a) Koska se on pakollista",
        "b) Jotta voit tuntea olevasi tylsistynyt",
        "c) Jotta ymmärrät paremmin, miten käytät aikaasi",
        "d) Koska älypuhelimet eivät ole hyödyllisiä",
      ],
      vastaus: "c) Jotta ymmärrät paremmin, miten käytät aikaasi",
    },
    {
      tehtNum: "8",
      tehtName: "Harjoitellaan rauhoittumista",
      Kategoria: "KursorinUllakko",
      Kuva: "/KursorinImages/Rauhottumista.webp",
      Tekstit: [
        "Joskus, kun on paljon menoa ja tekemistä, mieli voi tuntua jännittyneeltä ja kireältä. Se on vähän niin kuin olisit koko ajan juoksukilpailussa. Rauhoittuminen auttaa sinua olemaan rauhallisempi ja tuntemaan olosi paremmaksi sekä onnellisemmaksi.",
        "Nämä harjoitukset auttavat sinua olemaan rauhallisempi ja tuntemaan olosi paremmaksi. Voit tehdä niitä aina, kun tunnet olosi levottomaksi tai tarvitset hetken hengähtää.",
      ],
      numeroListaTitlet: [
        "Hengitysharjoitus",
        "Musiikkirentoutus",
        "Niskan Rentoutus",
        "Lukeminen",
      ],
      numeroListat: [
        [
          "Istu mukavasti ja laita käsi vatsallesi.",
          "Hengitä sisään nenän kautta ja laske hiljaa kolmeen.",
          "Puhalla ilma ulos suun kautta hitaasti.",
          "Toista tämä pari minuuttia ja tunne, kuinka vatsasi nousee ja laskee.",
        ],
        [
          "Istu mukavasti ja laita rauhallista musiikkia soimaan.",
          "Kuvittele, että olet lempipaikassasi, kuten rannalla.",
          "Jännitä jalkojesi lihaksia voimakkaasti ja rentouta ne sitten.",
          "Tee sama koko kehollesi, varpaista päähän.",
          "Lopuksi tunne koko kehosi rentona ja rauhallisena.",
        ],
        [
          "Istu suorassa ja hengitä sisään, nosta olkapäitäsi ylös.",
          "Hengitä ulos ja laske olkapäitäsi alas.",
          "Tee tätä muutama kerta ja tunne, kuinka olkapääsi ja niskasi rentoutuvat.",
        ],
        [
          "Valitse mielenkiintoinen kirja.",
          "Tee itsellesi mukava paikka lukea.",
          "Kun luet, et ajattele muita asioita ja mielesi rauhoittuu.",
        ],
      ],
      kysymys: "Miksi on tärkeää oppia rauhoittumaan?",
      vaihtoehdot: [
        "a) Koska se auttaa nukkumaan paremmin",
        "b) Koska se auttaa keskittymään ja tuntemaan olosi onnellisemmaksi",
        "c) Koska se auttaa sinua juoksemaan nopeammin",
        "d) Koska se auttaa sinua pelaamaan videopelejä paremmin",
      ],
      vastaus:
        "b) Koska se auttaa keskittymään ja tuntemaan olosi onnellisemmaksi",
    },
    {
      tehtNum: "9",
      Kategoria: "KursorinUllakko",
      tehtName: "Elämää ennenvanhaan - Kursori-papan urotyöt",

      SoundCloud:
        "https://soundcloud.com/digiseikkailu-oy/kursorin-ullakko-9-elamaa-ennenvanhaan-fin?in=digiseikkailu-oy/sets/digiseikkailu-uudet-tarinat&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      puolKuva: "/src/assets/KursorinImages/PappaLaama.webp",

      puolTeksti:
        "Millaista elämä on ollut ennen internettiä.\nMissä järjestyksessä teknologisia laitteita on tullut suomalaisten käyttöön\nAinoastaan älylaitteilla ei kannata täyttää koko elämää",
      Tekstit: [
        "Kursori-pappa avasi eteisessä isoa pahvilaatikkoa. Häntä jännitti niin että kädet tärisivät. ",
        "-Tässä ne nyt ovat. Painotuoreita kirjoja, ihan itse kirjoittamiani, hän huokaisi tyytyväisenä.",
        "Kursoria ei ollut juuri näkynyt viimeisten kuukausien aikana. Hän oli sulkeutunut ullakolle tietokoneensa ääreen kirjoittamaan muistelmiaan, jotka siis nyt olivat valmiit ja painettu ihan oikeaksi kirjaksi.",
        "Kursori avasi varovasti päällimmäisen kirjan. Etusivulla luki Kari Kursonen: Kursori-papan urotyöt. Kyynel pyrki papan silmäkulmaan. Tämä oli juhlallinen hetki.",
        "Myöhemmin illalla koko naapuruston väki kokoontui Kursorin luokse juhlistamaan kirjan julkaisua. Kaikki halusivat kuulla kirjan ensimmäisen luvun kirjailijan itsensä lukemana.",
        "Kursori karautti kurkkuaan ja aloitti:",
        "“Luku 1. Lapsuuteni Vietin lapsuuteni maatilalla nauttien reippaasta ja työntäyteisestä elämästä. Päiväni täyttyivät lampaiden laskemisesta ja kaitsemisesta sekä porkkanapenkin kitkemisestä.”",
        "-Hetkinen, yleisöstä kuului. Eikö teillä ollut televisiota tai tietokonetta? Häsä ja Appi ihmettelivät.",
        "-Siihen aikaan ei ollut tietokoneita kenelläkään. Televisio tuli naapuritaloon vasta sitten, kun olin jo teini-ikäinen. Kokoonnuimme kylän muiden nuorten kanssa katsomaan sitä yhdessä. Ne olivatkin hauskoja yhteisiä hetkiä! Kursori muisteli.",
        "-Olihan teillä kuitenkin kännykät? Appi halusi varmistaa.",
        "-Voi voi, ensimmäisen kännykän hankin vasta yli neljäkymmentävuotiaana. Ja sekin oli aikamoinen laatikko, iso ja painava salkku.",
        "Häsä ja Appi katsoivat Kursoria epäuskoisesti.",
        "-Miten te sitten menitte nettiin? he kysyivät kuin yhdestä suusta.",
        "-Heh heh, netti on oikeastaan aika nuori keksintö. Minä olen elänyt ison osan elämääni ilman internettiä. Internetin käyttö yleistyi vasta 1990-luvun puolivälissä. Ennen sitä tietoa ja viihdettä haettiin muualta, Kursori kertoili.",
        "-Tarkoitatko, että sinun nuoruudessasi ei ollut Youtubea, Snapchatiä tai kamerakännyköitä? Häsä ihmetteli.",
        "-Kyllä, minä en osannut edes kuvitella mitään sellaista nuorena, Kursori hymyili.",
        "Appi oli jo kokeillut elää pari päivää ilman puhelinta, kun kännykkä oli tippunut ja särkynyt. Se oli ollut oikeastaan ihan mukavaa. Hän oli huomannut, että aikaa oli jäänyt paljon enemmän kavereiden kanssa leikkimiseen ja Dogen kanssa ulkoiluun. Doge varsinkin oli nauttinut huomiosta ja pitkistä lenkeistä puhelimettomien päivien aikana. ",
        "Nyt Doge istui Apin vieressä ja tapitti sitä ruskeilla koiransilmillään. Se kuiskasi hiljaa Apin korvaan: Muistatko, miten hauskaa meillä oli, kun puhelimesi oli korjattavana?",
        "Appi jäi miettimään asiaa samalla, kun Kursori jatkoi kirjansa lukemista. Puhelimessa oli monta hyödyllistä ominaisuutta, mutta vielä enemmän iloa tuotti Dogen, ystävien ja perheen kanssa vietetty aika. Niitä ei voittanut paraskaan peli, video tai chattaily.",
      ],
    },
    {
      tehtNum: "10",
      tehtName: "Kiitollisuus-harjoituksia",
      Kategoria: "KursorinUllakko",
      Kuva: "/KursorinImages/KiitollisuusHarjoitus.webp",
      smallTitle: "Harjoitellaan kiitollisuutta",
      Tekstit: [
        "1. Kolme hyvää asiaa ja huippukohta\n\nMietitään päivästä kolme hyvää asiaa. Toinen kiitollisuuden ajattelun herättäjä, on päivän huippukohta. “Mikä oli päivän paras hetki?” tai ”Mikä asia sujui tänään hyvin?”. Kuitenkin jos päivässä on ollut suuria, vaivaavia huolia, niin ne on myös hyvä käsitellä.",
        "2. Kiitollisuuspurkki\n\nKiitollisuuspurkkiin kerätään asioita mistä olemme kiitollisia viikon ajalta.\n\nViikon lopuksi ne luetaan yhdessä. Apukysymyksinä:\n\n“Mikä sai minut nauramaan? Mikä meni hyvin? Kuka auttoi minua tänään?”\n\nLauseet voivat myös olla jatkettavia. ”Olen tänään iloinen siitä, että..” tai ”Minusta oli tänään ihanaa, kun..”.\n\nKiitollisuuden aiheet ovat yhteisiä, eikä tarkoitus ole laskea kuinka monta kukin on kirjoittanut viikon aikana. Lapset voivat olla myös kiitollisia, aikuisen mielestä, tosi kummallisista asioista ja sama toisinpäin. Kiitollisuuden aiheita ei myöskään vertailla, ettei kenellekään tule tunnetta, että hän tuntee kiitollisuutta väärin tai sisarus osaa osoittaa kiitollisuutta ”paremmin”.",
        "3. Kiitollisuuspäiväkirja\n\nKiitollisuuspäiväkirja on monelle tutuin kiitollisuusharjoitus. Siihen kirjataan päivittäin, kolme kertaa tai kerran viikossa niitä asioita, mistä on kiitollinen. Tutkimusten mukaan ”tehokkain” tapa pitää kiitollisuuspäiväkirjaa, on tehdä sitä kolmesti viikossa.",
        "4. Kiitollisuusviesti/kortti/kirje\n\nKiitollisuuden osoittaminen nostaa myös omaa kiitollisuuden tunnetta. Sen lisäksi, että kiitollisuutta osoittaa sanoin, voi sen tehdä viestillä, kortilla ja kirjeellä. Käytte luokan kanssa retkellä jossain kohteessa. Miettikää yhdessä, mitä kaikkea kivaa päivän aikana on tapahtunut ja kertaamme hyviä hetkiä. Sitten todetaan yhdessä: ”Lähetetäänkö kiitosviesti?”. ”Joo.” ”Mitä haluaisit siihen kirjoittaa?” Kirjoittakaa yhdessä, kuinka kivaa oli käydä, päivän huippukohdat ja kiitokset. Lopuksi luen sen läpi kaikille. Viestistä tulee hyvä olo ja varmasti myös vastaanottajalle. Voit tehdä pienen harjoituksen heti nyt. Mieti ketä voisit kiittää heti tällä hetkellä. Jos henkilö ei ole läsnä, kirjoita hänelle tekstitekstiviesti (tai käytä muuta pikaviestintävälinettä). Lähetä viesti.",
        "5. Kiitollisuuskiikarit ja hyvän lokikirja\n\nVoit askarrella kiitollisuuskiikarit (pahvista tai vessapaperirullista), joilla on tarkoitus etsiä kaikkea hyvää. Tähän voi liittää laivailuteeman, jossa etsitään hyviä asioita kiikareilla ja kirjoitetaan bongaamia hyviä asioita/tapahtumia/hetkiä kapteenin lokikirjaan. Päivän tai viikon jälkeen lapset voivat lukea otteita kapteenin lokikirjasta miehistölle (muulle luokalle).",
        "6. Hyvien hetkien uusinta\n\nSanotaan, että asioissa ei saa velloa eikä vatvoa, mutta on yksi poikkeus. Hassut tapahtumat, nauruntäyteiset muistot ja hyvät hetket ovat tehty vellomista, uudelleen muistelua ja vatvomista varten. Niitä saa pyörittää mielessään uudestaan ja uudestaan, sillä niiden muistelu tekee hyvää aivoillemme ja niiden jakaminen vahvistaa ihmissuhteitamme. Joka päivä olisi hyvä miettiskellä ainakin kymmenen minuuttia jotain hyvää tapahtumaa.",
        "7. ”Minä keksin” – kiitollisuudenosoitus\n\nParasta on ne ideat, jotka tulevat suoraan oppilailta. Annetaan kaikille mahdollisuus myös itse miettiä, miten juuri hän haluaa osoittaa tai harjoittaa kiitollisuutta.",
        "8. Käännetään kurja juttu kiitollisuudeksi\n\nKuvitellaan että yrität ehtiä bussiin. Kaadut pahasti, lyöt pääsi ja nenäsi ja kädet menevät ihan verille. Liikenne jatkaa kulkua ympärilläsi. Nyt nolottaa, näkiköhän kukaan. Kaveri auttaa sinut ylös. Koulupäiväkin menee nyt ihan pilalle. Nenäkin on ihan veressä ja näytät räjähtäneeltä. Soitat vanhemmallesi joka hakee sinut terveyskeskukseen ja sieltä kotiin lepäämään. Läksyt saat kaveriltasi tekstarilla. Pysähdytään. Mitkä kaikki asiat ovat kuitenkin hyvin? Auto ei ajanut päältäsi. Nenän verenvuodon saa loppumaan. Oli hyvä kaveri joka auttoi minut ylös. Sait viettää rauhassa aikaa kotona. Sait kuitenkin koulutehtävät ja hoidettua kouluhommat. Nenäkin on parempi ja käsien haavat ovat ummessa. Tilanteessa oli lopulta enemmän positiivista kuin negatiivista. Kun opetellaan kääntämään kaikki mahdollinen parhain päin, emme jää kantamaan ikäviä mietteitä. Loppu hyvin, kaikki hyvin.",
      ],
      kysymys: "Miksi on hyvä pitää kiitollisuuspäiväkirjaa?",
      vaihtoehdot: [
        "a) Koska se auttaa sinua muistamaan läksyjä",
        "b) Jotta voit kirjoittaa siellä kaikki ikävät asiat",
        "c) Se auttaa sinua muistamaan ja arvostamaan hyviä asioita elämässäsi",
        "d) Se auttaa sinua olemaan parempi urheilussa",
      ],
      vastaus:
        "c) Se auttaa sinua muistamaan ja arvostamaan hyviä asioita elämässäsi",
    },
    {
      tehtNum: "11",
      tehtName: "Sisukkuus-harjoituksia",
      Kategoria: "KursorinUllakko",
      Kuva: "/KursorinImages/Sisukkuus.webp",
      Tekstit: [
        "1. Mikä on sinun sisumoottorisi?\n\nMieti, mikä auttaa sinua jaksamaan, kun alkaa tuntua vaikealta. Se voi olla lempimusiikkisi, ajatus siitä, että selviät haasteesta, tai vaikka hauska elokuva.",
        "2. Sisukkaiden tarinoiden etsiminen\n\nEtsi tarinoita ihmisistä, jotka ovat olleet tosi sisukkaita. Voit löytää niitä kirjoista, lehdistä tai netistä. Kerro sitten kavereillesi, mikä tarinassa inspiroi sinua.",
        "3. Oma vahvuus ja sisäinen kannustus\n\nMuista, että olet hyvä monissa asioissa! Joskus kun tuntuu, että muut eivät usko sinuun, sisäinen kannustava äänesi auttaa sinua jaksamaan.",
        "4. Kasvun asenne\n\nUsko, että voit oppia ja kehittyä, vaikka välillä epäonnistuisitkin. Epäonnistumiset ovat oppimistilaisuuksia, eivätkä merkki siitä, että sinun pitäisi luovuttaa.",
        "5. Epäonnistuminen ei ole maailmanloppu\n\nJoskus kaadutaan, mutta se ei haittaa. Sisu tarkoittaa sitä, että nouset ylös ja yrität uudestaan. Epäonnistuminen on vain osa matkaa kohti tavoitetta.",
        "6. Tunnista terve sisukkuus\n\nJoskus on okei myös luovuttaa. Jos jokin asia on liian vaikea tai vie liikaa aikaa muilta tärkeiltä jutuilta, voi olla viisasta miettiä muita vaihtoehtoja.",
        "Näiden harjoitusten avulla opit olemaan sisukas ja uskomaan itseesi. Muista, että jokainen yritys on askel eteenpäin, ja joskus voi olla hyvä myös miettiä uusia suuntia.",
      ],
      kysymys: "Mitä sisukkuus tarkoittaa?",
      vaihtoehdot: [
        "a) Luovuttamista, kun asiat ovat vaikeita",
        "b) Yrittämistä ja uudelleen yrittämistä, vaikka epäonnistuisit",
        "c) Koulutehtävien unohtamista",
        "d) Pelkästään voittamista urheilukisoissa",
      ],
      vastaus: "b) Yrittämistä ja uudelleen yrittämistä, vaikka epäonnistuisit",
    },
  ];
  return Tehtävät;
};
