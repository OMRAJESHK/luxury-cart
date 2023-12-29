import React, { useState } from "react";
import RangeSlider from "../../ui/rangeSlider/rangeSlider";
import { useDispatch, useSelector } from "react-redux";
import { getProductsByPrice } from "../../../store/productSlice";

const PriceRange = () => {
  const dispatch = useDispatch();
  const { products, category } = useSelector((state) => state.product);
  const [range, setRange] = useState(0);

  const updatedProducts = +category
    ? products.filter((product) => product.category === +category)
    : products;
  const maxPriceProduct = updatedProducts.reduce((max, currentProduct) => {
    return currentProduct.price > max.price ? currentProduct : max;
  }, updatedProducts[0]);

  const minPriceProduct = updatedProducts.reduce((min, currentProduct) => {
    return currentProduct.price < min.price ? currentProduct : min;
  }, updatedProducts[0]);

  const onRangeChangeHandler = (e) => {
    const { value } = e.target;
    setRange(value);

    const payload = { price: value };
    dispatch(getProductsByPrice(payload));
  };

  return (
    <div className="p-2">
      <h6 class="my-10 font-extrabold dark:text-white">filter by Price</h6>
      <RangeSlider
        min={minPriceProduct?.price}
        max={maxPriceProduct?.price}
        step="100"
        value={range}
        onChange={onRangeChangeHandler}
      />
    </div>
  );
};

export default PriceRange;
