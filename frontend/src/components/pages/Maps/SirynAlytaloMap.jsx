import { AdventureMapComponent } from "../../elements/AdventureMapComponent";

export const SirynAlytaloMap = () => {
  return (
    <>
      <AdventureMapComponent
        Data={{
          Title: "Siryn Alytalo",
          Image: "/Kartat/SirynMap.jpg",
          Kategoria: "SirynÄlytalo",
          exercise: "/tehtävät/sirynalytalo/1",
          Balls: [
            {
              Väri: "Vihreä",
              Kategoria: "Tietoteksti",
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
              Kategoria: "Tietoteksti",
              number: "3",
              x: 810,
              y: 475,
            },
            {
              Väri: "Vihreä",
              Kategoria: "Tehtävä",
              number: "4",
              x: 550,
              y: 395,
            },
            {
              Väri: "Vihreä",
              Kategoria: "Tarina",
              number: "5",
              x: 775,
              y: 290,
            },
            {
              Väri: "Vihreä",
              Kategoria: "Tietoteksti",
              number: "6",
              x: 750,
              y: 207,
            },
            {
              Väri: "Rosa",
              Kategoria: "Tehtävä",
              number: "7",
              x: 630,
              y: 100,
            },
          ],
        }}
        url="/tehtävät/sirynalytalo"
      />
    </>
  );
};
