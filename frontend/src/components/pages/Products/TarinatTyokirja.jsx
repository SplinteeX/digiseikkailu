import { Product } from "../../elements/Product";
import { ProductsData2 } from "../../data/ProductsData2";
export const TarinatTyokirja = () => {
  const { TarinatJaTehtavat } = ProductsData2();
  return (
    <div className="TarinatTyokirja">
      <Product Data={TarinatJaTehtavat[0]} />
    </div>
  );
};
