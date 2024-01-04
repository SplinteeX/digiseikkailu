export const ProductsData = () => {
  const Oppilaitos = [
    {
      title: "Digiseikkailu tarinat ja tehtävä vihko",
      img: "images/tarinat-ja-tehtävät-työkirja-home.png",
      description:
        "Digiseikkailun tarina- ja tehtävävihkossa opitaan tieto- ja viestintäteknologian käsitteistöä sekä vahvistetaan lukemisen ja kuvittelemisen taitoa.",
    },
    {
      title: "TVT-opetuksen taitopaketti",
      img: "images/tvt-opetuksen-taitopaketti-home.png",
      description:
        "Paras konkreettinen tuki TVT-opetuksen perustaitojen vahvistamiseen",
    },
    {
      title: "Oppilaitoksen ominaisuudet",
      description:
        "Oppilaitoksen ominaisuuksiin kuuluu kaikki + opettajan paneelit.",
      ominaisuudet:
        "Seuranta, Diplomi, Tuki, Tehtävien suoritusmerkki, Chat, Opettajan paneeli, Oppilaan lisääminen",
    },
  ];
  const Opettaja = [
    {
      title: "Digiseikkailu tarinat ja tehtävä vihko",
      img: "images/tarinat-ja-tehtävät-työkirja-home.png",
      description:
        "Digiseikkailun tarina- ja tehtävävihkossa opitaan tieto- ja viestintäteknologian käsitteistöä sekä vahvistetaan lukemisen ja kuvittelemisen taitoa.",
    },
    {
      title: "TVT-opetuksen taitopaketti",
      img: "images/tvt-opetuksen-taitopaketti-home.png",
      description:
        "Paras konkreettinen tuki TVT-opetuksen perustaitojen vahvistamiseen",
    },
    {
      title: "Opettajan ominaisuudet",
      description:
        "Opettajan ominaisuuksiin kuuluu kaikki + opettajan paneeli.",
      ominaisuudet:
        "Seuranta, Diplomi, Tuki, Tehtävien suoritusmerkki, Chat, Opettajan paneeli, Oppilaan lisääminen",
    },
  ];
  const Yksityishenkilö = [
    {
      title: "Digiseikkailu tarinat ja tehtävä vihko",
      img: "images/tarinat-ja-tehtävät-työkirja-home.png",
      description:
        "Digiseikkailun tarina- ja tehtävävihkossa opitaan tieto- ja viestintäteknologian käsitteistöä sekä vahvistetaan lukemisen ja kuvittelemisen taitoa.",
    },
    {
      title: "TVT-opetuksen taitopaketti",
      img: "images/tvt-opetuksen-taitopaketti-home.png",
      description:
        "Paras konkreettinen tuki TVT-opetuksen perustaitojen vahvistamiseen",
    },
    {
      title: "Yksityishenkilön ominaisudet",
      description: "Yksityishenkilönä saat täydet oikeudet digiseikkailuun.",
      ominaisuudet: "Seuranta, Diplomi, Tuki, Tehtävien suoritusmerkki, Chat",
      notIncluded: "Opettajan paneeli, Oppilaan lisääminen",
    },
  ];
  return { Oppilaitos, Yksityishenkilö, Opettaja };
};
