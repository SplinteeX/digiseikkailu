import { AdventureMapComponent } from "../../elements/AdventureMapComponent";

export const MiukumaukuMap = () => {
  return (
    <>
      <AdventureMapComponent
        Data={{
          Title: "Miukumauku",
          Image: "/src/assets/Kartat/MiukunMap.jpg",
          Kategoria: "MiukuMaukunKirjasto",
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
              x: 550,
              y: 495,
            },
            {
              Väri: "Vihreä",
              Kategoria: "Tehtävä",
              number: "3",
              x: 950,
              y: 413,
            },
            {
              Väri: "Vihreä",
              Kategoria: "Tehtävä",
              number: "4",
              x: 530,
              y: 320,
            },
            {
              Väri: "Rosa",
              Kategoria: "Tehtävä",
              number: "5",
              x: 700,
              y: 105,
            },
          ],
        }}
        url="/tehtävät/miukumauku"
      />
    </>
  );
};
