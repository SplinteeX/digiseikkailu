import { AdventureMapComponent } from "../../elements/AdventureMapComponent";

export const OhjelmointiMap = () => {
  return (
    <>
      <AdventureMapComponent
        Data={{
          Title: "Ohjelmointi",
          Image: "/src/assets/Kartat/DogenboxiKartta.jpg",
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
              Kategoria: "Tietoteksti",
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
              Kategoria: "Tietoteksti",
              number: "4",
              x: 720,
              y: 485,
            },
            {
              Väri: "Vihreä",
              Kategoria: "Tehtävä",
              number: "5",
              x: 875,
              y: 410,
            },
            {
              Väri: "Vihreä",
              Kategoria: "Tehtävä",
              number: "6",
              x: 630,
              y: 395,
            },
            {
              Väri: "Vihreä",
              Kategoria: "Peli",
              number: "7",
              x: 630,
              y: 310,
            },
            {
              Väri: "Vihreä",
              Kategoria: "Peli",
              number: "8",
              x: 930,
              y: 280,
            },
            { Väri: "Rosa", Kategoria: "Tehtävä", number: "9", x: 830, y: 210 },
            {
              Väri: "Rosa",
              Kategoria: "Tehtävä",
              number: "10",
              x: 650,
              y: 100,
            },
          ],
        }}
        url="/tehtävät/ohjelmointi"
      />
    </>
  );
};
