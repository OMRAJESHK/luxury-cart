import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getProductById } from "../../../store/productSlice";
import Flexbox from "../../ui/flexbox/flexbox";
import ProductGallery from "./productGallery";
import ProductDescription from "./productDescription";

const ProductDetails = (props) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.selected);

  const [searchParams] = useSearchParams();

  console.log("searchParams", product.gallery);

  useEffect(() => {
    dispatch(getProductById({ productId: searchParams.get("productId") }));
  }, []);

  return (
    <div className="m-10">
      <div>
        <h1 className="my-10 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          {product.title}
        </h1>
        <Flexbox gap={10} justifyContent="center">
          <div style={{ width: "40rem", height: "auto" }}>
            <ProductGallery />
            <ProductDescription
              title={product.title}
              description={product.description}
              price={product.price}
              ratings={product.ratings}
            />
          </div>
        </Flexbox>
      </div>
    </div>
  );
};

ProductDetails.propTypes = {};

export default ProductDetails;
