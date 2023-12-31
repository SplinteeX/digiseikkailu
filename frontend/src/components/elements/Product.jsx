import "../css/product.css";
import { Dropdown } from "./dropdown";
export const Product = ({ Data, Text }) => {
  return (
    <div className="Product">
      <h2>{Data.title}</h2>
      <div className="Header">
        <div className="Left-side">
          <img src={Data.img} alt="" />
        </div>
        <div className="Right-side">
          <p>{Data.smallDescription}</p>
        </div>
      </div>
      <div className="Body">
        <p>{Data.description}</p>
      </div>
      <div className="Dropdown-bottom">
        <Dropdown Text={Text} Data={Data.language} />
        <button>Lisää ostoskoriin</button>
      </div>
    </div>
  );
};
