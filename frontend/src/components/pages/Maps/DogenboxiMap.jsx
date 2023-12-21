import { AdventureMapComponent } from "../../elements/AdventureMapComponent";

export const DogenboxiMap = () => {
  return (
    <>
      <AdventureMapComponent
        Data={{
          Title: "Dogenboxi",
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
            { Kategoria: "Tehtävä", number: "12", x: 930, y: 465 },
            { Kategoria: "Tehtävä", number: "13", x: 915, y: 415 },
            { Kategoria: "Peli", number: "14", x: 730, y: 405 },
            { Kategoria: "Peli", number: "15", x: 590, y: 395 },
            { Kategoria: "Tehtävä", number: "16", x: 500, y: 326 },
            { Kategoria: "Tehtävä", number: "17", x: 930, y: 278 },
            { Kategoria: "Peli", number: "18", x: 1050, y: 245 },
            { Kategoria: "Peli", number: "19", x: 850, y: 218 },
            { number: "20", x: 500, y: 195 },
            { number: "21", x: 490, y: 120 },
          ],
        }}
        url="/tehtävät/dogenboxi"
      />
    </>
  );
};
