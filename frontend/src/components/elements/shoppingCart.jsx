import "../css/shoppingCart.css";
import remove from "../../assets/remove-icon.png";
export const ShoppingCart = ({ Click }) => {
  return (
    <div className="Shopping-cart">
      <img src={remove} width={"25px"} height={"25px"} alt="" onClick={Click} />
    </div>
  );
};
