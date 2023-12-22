import { AdventureMapComponent } from "../../elements/AdventureMapComponent";

export const HasanStudioMap = () => {
  return (
    <>
      <AdventureMapComponent
        Data={{
          Title: "Häsän Studio",
          Image: "/src/assets/Kartat/DogenboxiKartta.jpg",
          Balls: [
            { Kategoria: "Tietoteksti", number: "1", x: 385, y: 777 },
            { Kategoria: "Peli", number: "2", x: 485, y: 685 },
            { Kategoria: "Peli", number: "3", x: 610, y: 675 },
            { Kategoria: "Peli", number: "4", x: 750, y: 665 },
            { Kategoria: "Peli", number: "5", x: 875, y: 655 },
            { Kategoria: "Peli", number: "6", x: 1010, y: 643 },
            { Kategoria: "Peli", number: "7", x: 930, y: 605 },
            { Kategoria: "Peli", number: "8", x: 730, y: 590 },
            { Kategoria: "Peli", number: "9", x: 430, y: 555 },
            { Kategoria: "Peli", number: "10", x: 760, y: 480 },
            { Kategoria: "Peli", number: "11", x: 550, y: 500 },
            { Kategoria: "Tehtävä", number: "12", x: 350, y: 165 },
            { Kategoria: "Tehtävä", number: "13", x: 700, y: 105 },
          ],
        }}
        url="/tehtävät/häsänstudio"
      />
    </>
  );
};
