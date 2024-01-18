import { AdventureMapComponent } from "../../elements/AdventureMapComponent";

export const LaamanAitausMap = () => {
  return (
    <>
      <AdventureMapComponent
        Data={{
          Title: "Laaman aitaus",
          Image: "/Kartat/LaamanKartta.jpg",
          Kategoria: "LaamanAitaus",
          Balls: [
            {
              Väri: "Vihreä",
              Kategoria: "Tarina",
              number: "1",
              x: 385,
              y: 777,
            },
            {
              Väri: "Vihreä",
              Kategoria: "Tehtävä",
              number: "2",
              x: 785,
              y: 660,
            },
            {
              Väri: "Vihreä",
              Kategoria: "Tehtävä",
              number: "3",
              x: 610,
              y: 575,
            },
            {
              Väri: "Vihreä",
              Kategoria: "Tarina",
              number: "4",
              x: 550,
              y: 495,
            },
            {
              Väri: "Vihreä",
              Kategoria: "Tarina",
              number: "5",
              x: 775,
              y: 475,
            },
            {
              Väri: "Vihreä",
              Kategoria: "Tehtävä",
              number: "6",
              x: 950,
              y: 413,
            },
            {
              Väri: "Vihreä",
              Kategoria: "Tarina",
              number: "7",
              x: 630,
              y: 395,
            },
            {
              Väri: "Vihreä",
              Kategoria: "Tarina",
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
              Kategoria: "Tehtävä",
              number: "10",
              x: 760,
              y: 215,
            },
            {
              Väri: "Vihreä",
              Kategoria: "Tehtävä",
              number: "11",
              x: 550,
              y: 200,
            },
            {
              Väri: "Rosa",
              Kategoria: "Tehtävä",
              number: "12",
              x: 350,
              y: 165,
            },
            {
              Väri: "Rosa",
              Kategoria: "Tietoteksti",
              number: "13",
              x: 700,
              y: 105,
            },
          ],
        }}
        url="/tehtävät/laamanaitaus"
      />
    </>
  );
};
