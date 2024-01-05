import { AdventureMapComponent } from "../../elements/AdventureMapComponent";

export const HasanStudioMap = () => {
  return (
    <>
      <AdventureMapComponent
        Data={{
          Title: "Häsän Studio",
          Image: "/Kartat/Häsänstudio.jpg",
          Kategoria: "HäsänStudio",
          TextColor: "black",
          Balls: [
            {
              Väri: "Rosa",
              Kategoria: "Tietoteksti",
              number: "1",
              x: 385,
              y: 777,
            },
            {
              Väri: "Rosa",
              Kategoria: "Tietoteksti",
              number: "2",
              x: 785,
              y: 660,
            },
            {
              Väri: "Rosa",
              Kategoria: "Tietoteksti",
              number: "3",
              x: 610,
              y: 575,
            },
            {
              Väri: "Sininen",
              Kategoria: "Tietoteksti",
              number: "4",
              x: 550,
              y: 495,
            },
            {
              Väri: "Vihreä",
              Kategoria: "Tehtävä",
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
              Kategoria: "Tarina",
              number: "7",
              x: 630,
              y: 395,
            },
            {
              Väri: "Vihreä",
              Kategoria: "Tehtävä",
              number: "8",
              x: 530,
              y: 320,
            },
            { Väri: "Rosa", Kategoria: "Tarina", number: "9", x: 830, y: 285 },
            {
              Väri: "Rosa",
              Kategoria: "Tietoteksti",
              number: "10",
              x: 760,
              y: 215,
            },
            {
              Väri: "Sininen",
              Kategoria: "Tietoteksti",
              number: "11",
              x: 550,
              y: 200,
            },
            {
              Väri: "Sininen",
              Kategoria: "Tehtävä",
              number: "12",
              x: 350,
              y: 165,
            },
          ],
        }}
        url="/tehtävät/häsänstudio"
      />
    </>
  );
};
