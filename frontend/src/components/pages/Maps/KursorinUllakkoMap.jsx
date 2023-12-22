import { AdventureMapComponent } from "../../elements/AdventureMapComponent";

export const KursorinUllakkoMap = () => {
  return (
    <>
      <AdventureMapComponent
        Data={{
          Title: "Kursorin Ullakko",
          Image: "/src/assets/Kartat/DogenboxiKartta.jpg",
          Balls: [
            {
              Väri: "Vihreä",
              Kategoria: "Tietoteksti",
              number: "1",
              x: 385,
              y: 777,
            },
            { Väri: "Vihreä", Kategoria: "Peli", number: "2", x: 485, y: 685 },
            { Väri: "Vihreä", Kategoria: "Peli", number: "3", x: 610, y: 675 },
            { Väri: "Vihreä", Kategoria: "Peli", number: "4", x: 750, y: 665 },
            { Väri: "Vihreä", Kategoria: "Peli", number: "5", x: 875, y: 655 },
            { Väri: "Vihreä", Kategoria: "Peli", number: "6", x: 1010, y: 643 },
            { Väri: "Vihreä", Kategoria: "Peli", number: "7", x: 930, y: 605 },
            { Väri: "Vihreä", Kategoria: "Peli", number: "8", x: 730, y: 590 },
            { Väri: "Vihreä", Kategoria: "Peli", number: "9", x: 430, y: 555 },
            { Väri: "Vihreä", Kategoria: "Peli", number: "10", x: 760, y: 480 },
            { Väri: "Vihreä", Kategoria: "Peli", number: "11", x: 550, y: 500 },
            {
              Väri: "Vihreä",
              Kategoria: "Tehtävä",
              number: "12",
              x: 930,
              y: 465,
            },
            {
              Väri: "Vihreä",
              Kategoria: "Tehtävä",
              number: "13",
              x: 915,
              y: 415,
            },
            { Väri: "Vihreä", Kategoria: "Peli", number: "14", x: 730, y: 405 },
            { Väri: "Vihreä", Kategoria: "Peli", number: "15", x: 590, y: 395 },
            {
              Väri: "Rosa",
              Kategoria: "Tehtävä",
              number: "16",
              x: 430,
              y: 382,
            },
            {
              Väri: "Rosa",
              Kategoria: "Tehtävä",
              number: "17",
              x: 730,
              y: 300,
            },
            {
              Väri: "Vihreä",
              Kategoria: "Peli",
              number: "18",
              x: 500,
              y: 326,
            },
            {
              Väri: "Sininen",
              Kategoria: "Tehtävä",
              number: "19",
              x: 930,
              y: 278,
            },
            {
              Väri: "Rosa",
              Kategoria: "Tehtävä",
              number: "20",
              x: 1050,
              y: 245,
            },
            {
              Väri: "Rosa",
              Kategoria: "Tehtävä",
              number: "21",
              x: 850,
              y: 218,
            },
            {
              Väri: "Sininen",
              Kategoria: "Video",
              number: "22",
              x: 680,
              y: 207,
            },
            {
              Väri: "Sininen",
              Kategoria: "Tietoteksti",
              number: "23",
              x: 460,
              y: 190,
            },
            {
              Väri: "Sininen",
              Kategoria: "Tarina",
              number: "24",
              x: 600,
              y: 110,
            },
          ],
        }}
        url="/tehtävät/dogenboxi"
      />
    </>
  );
};
