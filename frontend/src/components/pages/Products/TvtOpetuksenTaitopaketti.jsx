import { Product } from "../../elements/Product";
import { ProductsData2 } from "../../data/ProductsData2";
import { Dropdown } from "../../elements/dropdown";
export const TvtOpetuksenTaitoPaketti = () => {
  const { TvtOpetuksenTaitoPaketti } = ProductsData2();
  return (
    <div className="TarinatTyokirja">
      <Product Data={TvtOpetuksenTaitoPaketti[0]} />
    </div>
  );
};
