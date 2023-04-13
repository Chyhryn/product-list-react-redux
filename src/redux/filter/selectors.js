import { createSelector } from "@reduxjs/toolkit";
import { selectProducts } from "../products/selectors";
const selectFilterValue = (state) => state.filter;

export const selectFilteredProducts = createSelector(
  [selectProducts, selectFilterValue],
  (products, filterValue) => {
    if (filterValue) {
      const filteredProducts = products.filter((product) => {
        return product.name.toLowerCase().includes(filterValue.toLowerCase());
      });
      return filteredProducts;
    }
    return products;
  }
);
