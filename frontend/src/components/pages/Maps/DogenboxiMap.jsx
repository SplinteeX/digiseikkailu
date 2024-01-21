import { AdventureMapComponent } from "../../elements/AdventureMapComponent";

export const DogenboxiMap = () => {
  return (
    <>
      <AdventureMapComponent
        Data={{
          Title: "Dogenboxi",
          Image: "/Kartat/DogenboxiKartta.jpg",
          Kategoria: "DogenBoxi",
          Text: "black",
          Balls: [
            {
              Väri: "Rosa",
              Kategoria: "Tietoteksti",
              number: "1",
              x: 385,
              y: 777,
            },
            { Väri: "Rosa", Kategoria: "Tarina", number: "2", x: 485, y: 685 },
            {
              Väri: "Rosa",
              Kategoria: "Tietoteksti",
              number: "3",
              x: 610,
              y: 675,
            },
            { Väri: "Rosa", Kategoria: "Video", number: "4", x: 750, y: 665 },
            { Väri: "Sininen", Kategoria: "Peli", number: "5", x: 875, y: 655 },
            {
              Väri: "Sininen",
              Kategoria: "Tarina",
              number: "6",
              x: 1010,
              y: 643,
            },
            {
              Väri: "Sininen",
              Kategoria: "Tietoteksti",
              number: "7",
              x: 930,
              y: 605,
            },
            {
              Väri: "Vihreä",
              Kategoria: "Tietoteksti",
              number: "8",
              x: 730,
              y: 590,
            },
            {
              Väri: "Vihreä",
              Kategoria: "Tietoteksti",
              number: "9",
              x: 430,
              y: 555,
            },
            {
              Väri: "Sininen",
              Kategoria: "Tietoteksti",
              number: "10",
              x: 760,
              y: 480,
            },
            {
              Väri: "Sininen",
              Kategoria: "Tietoteksti",
              number: "11",
              x: 550,
              y: 500,
            },
            { Väri: "Vihreä", Kategoria: "Peli", number: "12", x: 930, y: 465 },
            {
              Väri: "Vihreä",
              Kategoria: "Tietoteksti",
              number: "13",
              x: 915,
              y: 415,
            },
            {
              Väri: "Rosa",
              Kategoria: "Tietoteksti",
              number: "14",
              x: 730,
              y: 405,
            },
            {
              Väri: "Rosa",
              Kategoria: "Tietoteksti",
              number: "15",
              x: 590,
              y: 395,
            },
            {
              Väri: "Vihreä",
              Kategoria: "Tietoteksti",
              number: "16",
              x: 500,
              y: 326,
            },
            {
              Väri: "Rosa",
              Kategoria: "Tietoteksti",
              number: "17",
              x: 930,
              y: 278,
            },
            {
              Väri: "Rosa",
              Kategoria: "Tarina",
              number: "18",
              x: 1050,
              y: 245,
            },
            {
              Väri: "Sininen",
              Kategoria: "Tietoteksti",
              number: "19",
              x: 850,
              y: 218,
            },
            {
              Väri: "Sininen",
              Kategoria: "Tietoteksti",
              number: "20",
              x: 600,
              y: 195,
            },
            {
              Väri: "Sininen",
              Kategoria: "Tietoteksti",
              number: "21",
              x: 460,
              y: 185,
            },
            {
              Väri: "Sininen",
              Kategoria: "Tietoteksti",
              number: "22",
              x: 490,
              y: 120,
            },
          ],
        }}
        url="/tehtävät/dogenboxi"
      />
    </>
  );
};
