import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Heading } from "../../components/Heading/Heading";
import { ProductsList } from "../../components/ProductsList/ProductsList";
import { ProductsFilter } from "../../components/ProductsFilter/ProductsFilter";
import { fetchProducts } from "../../redux/products/operations";
import {
  selectProducts,
  selectIsLoading,
  selectError,
} from "../../redux/products/selectors";

import { Container, Header } from "./Products.styled";
export const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Container>
      <Header>
        <Heading>Products list</Heading>
        <ProductsFilter />
        {isLoading && !error && (
          <p>Please wait. We are loading the products.</p>
        )}
        {error && <p>{error}</p>}
        {products.length > 0 && <ProductsList />}
      </Header>
    </Container>
  );
};
