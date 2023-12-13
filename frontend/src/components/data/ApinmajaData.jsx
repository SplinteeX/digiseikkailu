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
      Kategoria: "Apinmaja",
      puolTeksti:
        "Miuku-Mauku jahtaa jälleen Pointteri-hiirtä. Hiiri on kuitenkin nopeampi ja vie kissan mitä ihmeellisimpiin seikkailuihin matkallaan.",
      puolKuva: "src/assets/Apinmajaimages/kissahiiri.webp",
      SoundCloud: "soundcloud.com/digiseikkailu-oy/apinmaja-2",
      Unity:
        "https://digiadventurers.com/unity-games/prod/hiiripiiri/index.html",
    },
    {
      tehtNum: "3",
      tehtName: "Hiiritehtävä 1",
      puolTitle: "Napsauttele numerot",
      Kategoria: "Apinmaja",
      puolTeksti:
        "Harjoittele klikkaamaan kaksoisnapsautuksella numeroita järjestyksessä. Mikä kuva ilmestyy ruudulle? Mitä tietoturvaan liittyviä huomioita voit tehdä kuvasta?",
      puolKuva: "",
      SoundCloud:
        "https://soundcloud.com/digiseikkailu-oy/apinmaja-3-hiiritehtaevae-1",
    },
    {
      tehtNum: "4",
      tehtName: "Hiiritehtävä 2",
      puolTitle: "Seuraa viivaa",
      Kategoria: "Apinmaja",
      puolTeksti:
        "Seuraa viivaa hiiren osoittimella. Paina hiiren ykköspainiketta kun maalaat viivaa. Pyri tekemään mahdollisimman tarkasti.",
      puolKuva: "",
      SoundCloud:
        "https://soundcloud.com/digiseikkailu-oy/apinmaja-3-hiiritehtaevae-2",
    },
    {
      tehtNum: "5",
      tehtName: "Hiiritehtävä 3",
      puolTitle: "Maalaa ja lihavoi nimet",
      Kategoria: "Apinmaja",
      puolTeksti:
        "Harjoitellaan maalaamaan, eli valitsemaan hiirellä. Tehdään tekstin lihavointi pikakomennolla ( Ctrl + B )",
      Kuva: "",
      SoundCloud:
        "https://soundcloud.com/digiseikkailu-oy/apinmaja-3-hiiritehtaevae-3",
    },
    {
      tehtNum: "6",
      tehtName: "Hiiritehtävä 4",
      puolTitle: "Maalaa ja lihavoi riimiparit",
      Kategoria: "Apinmaja",
      puolTeksti:
        "Harjoitellaan maalaamaan, eli valitsemaan hiirellä. Tehdään tekstin lihavointi pikakomennolla ( Ctrl + B )",
      Kuva: "",
      puolKuvat: ["DogenluuMaalattu", "DogenluuLihavoitu"],
      SoundCloud:
        "https://soundcloud.com/digiseikkailu-oy/apinmaja-3-hiiritehtaevae-4",
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
