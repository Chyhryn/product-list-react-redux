import { useDispatch } from "react-redux";
import { setFilterValue } from "../../redux/filter/slice";
import { Label, Span } from "./ProductsFilter.styled";

export const ProductsFilter = () => {
  const dispatch = useDispatch();
  const onChangeHandler = (e) => dispatch(setFilterValue(e.target.value));

  return (
    <Label>
      <Span>Find products by title</Span>
      <input type="text" name="filter" onChange={onChangeHandler} />
    </Label>
  );
};
