import { AdventureMapComponent } from "../../elements/AdventureMapComponent";

export const KursorinUllakkoMap = () => {
  return (
    <>
      <AdventureMapComponent
        Data={{
          Title: "Kursorin Ullakko",
          Image: "/src/assets/Kartat/DogenboxiKartta.jpg",
          Kategoria: "KursorinUllakko",
          Balls: [
            {
              Väri: "Vihreä",
              Kategoria: "Tietoteksti",
              number: "1",
              x: 385,
              y: 777,
            },
            {
              Väri: "Rosa",
              Kategoria: "Tehtävä",
              number: "2",
              x: 785,
              y: 660,
            },
            {
              Väri: "Vihreä",
              Kategoria: "Tarina",
              number: "3",
              x: 610,
              y: 575,
            },
            {
              Väri: "Vihreä",
              Kategoria: "Video",
              number: "4",
              x: 550,
              y: 495,
            },
            {
              Väri: "Rosa",
              Kategoria: "Tietoteksti",
              number: "5",
              x: 775,
              y: 475,
            },
            {
              Väri: "Vihreä",
              Kategoria: "Tarina",
              number: "6",
              x: 950,
              y: 413,
            },
            {
              Väri: "Vihreä",
              Kategoria: "Tietoteksti",
              number: "7",
              x: 630,
              y: 395,
            },
            {
              Väri: "Vihreä",
              Kategoria: "Tietoteksti",
              number: "8",
              x: 530,
              y: 320,
            },
            {
              Väri: "Vihreä",
              Kategoria: "Tarina",
              number: "9",
              x: 830,
              y: 285,
            },
            {
              Väri: "Vihreä",
              Kategoria: "Tietoteksti",
              number: "10",
              x: 760,
              y: 215,
            },
            {
              Väri: "Sininen",
              Kategoria: "Tietoteksti",
              number: "11",
              x: 500,
              y: 120,
            },
          ],
        }}
        url="/tehtävät/kursorinullakko"
      />
    </>
  );
};
