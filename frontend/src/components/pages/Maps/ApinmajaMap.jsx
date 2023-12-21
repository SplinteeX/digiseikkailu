import { AdventureMapComponent } from "../../elements/AdventureMapComponent";

export const ApinmajaMap = () => {
  return (
    <>
      <AdventureMapComponent
        Data={{
          Title: "Apinmaja",
          Image: "/src/assets/Kartat/ApinmajaKartta.jpg",
          Balls: [
            { number: "1", x: 385, y: 777 },
            { number: "2", x: 485, y: 685 },
            { number: "3", x: 610, y: 675 },
            { number: "4", x: 750, y: 665 },
            { number: "5", x: 875, y: 655 },
            { number: "6", x: 1010, y: 643 },
            { number: "7", x: 930, y: 605 },
            { number: "8", x: 730, y: 590 },
            { number: "9", x: 430, y: 555 },
            { number: "10", x: 760, y: 480 },
            { number: "11", x: 550, y: 500 },
            { number: "12", x: 930, y: 465 },
            { number: "13", x: 915, y: 415 },
            { number: "14", x: 730, y: 405 },
            { number: "15", x: 590, y: 395 },
            { number: "16", x: 430, y: 382 },
            { number: "17", x: 730, y: 300 },
            { number: "18", x: 500, y: 326 },
            { number: "19", x: 930, y: 278 },
            { number: "20", x: 1050, y: 245 },
            { number: "21", x: 850, y: 218 },
            { number: "22", x: 680, y: 207 },
            { number: "23", x: 500, y: 195 },
            { number: "24", x: 344, y: 163 },
            { number: "25", x: 490, y: 120 },
          ],
        }}
        url="/tehtävät/apinmaja" // Replace with your URL
      />
    </>
  );
};
