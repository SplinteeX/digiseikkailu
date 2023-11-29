import "../css/product.css";
export const Product = ({ Data }) => {
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
    </div>
  );
};
