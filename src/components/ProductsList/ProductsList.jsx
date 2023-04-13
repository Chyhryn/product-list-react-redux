import { Product } from "./Product/Product";
import { useSelector } from "react-redux";
import { selectFilteredProducts } from "../../redux/filter/selectors";
import { List } from "./ProductList.styled";

export const ProductsList = () => {
  const filteredProducts = useSelector(selectFilteredProducts);

  return (
    <>
      {filteredProducts.length > 0 && (
        <List>
          {filteredProducts.map((product) => (
            <Product product={product} key={product.asin} />
          ))}
        </List>
      )}
    </>
  );
};
