import React from "react";
import Card from "../../ui/card/card";
import Flexbox from "../../ui/flexbox/flexbox";
import classes from "./home.module.css";
import Image from "../../ui/image";
import StarIcon from "../../../assets/svg/starIcon";
import HeartIcon from "../../../assets/svg/heartIcon";
import { fillArrayUpTo, formatNumber } from "../../../utils/common";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "../../../store/preferenceSlice";
import { createSearchParams, useNavigate } from "react-router-dom";

const Main = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.product.updatedProducts);

  const onHeartIconClickHandler = (productId) => {
    dispatch(addToWishlist({ productId }));
  };

  const GetStars = ({ ratings }) => {
    const limit = 5;
    const filledArray = fillArrayUpTo(limit);
    return filledArray.map((item) => {
      if (item <= ratings) {
        return <StarIcon isFill />;
      } else {
        return <StarIcon />;
      }
    });
  };

  const onProductClickHandler = (id) => {
    navigate({
      pathname: "product-details",
      search: createSearchParams({
        productId: id,
      }).toString(),
    });
  };

  return (
    <main className={`${classes["main-wrapper"]}`}>
      <Flexbox gap={10}>
        {products.map((product) => (
          <Card key={product.id} classProp={classes["product-item-wrapper"]}>
            <Card.Body>
              <div onClick={() => onProductClickHandler(product.id)}>
                <div className={classes["image-wrapper"]}>
                  <Image src={product.thumbnail} alt={product.title} />
                </div>
                <h5 class="mt-1 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {product.title}
                </h5>
              </div>
              <div class="flex items-center mt-2.5 mb-5">
                <div class="flex items-center space-x-1 rtl:space-x-reverse">
                  <GetStars ratings={product.ratings} />
                </div>
                <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                  {product?.ratings}
                </span>
                <span>
                  <HeartIcon
                    isFill
                    onClick={() => onHeartIconClickHandler(product?.id)}
                  />
                </span>
              </div>
            </Card.Body>
            <Card.Footer>
              <span class=" font-bold text-gray-900 dark:text-white">
                {`₹${formatNumber(product.price)}/-`}
              </span>
              <button
                onClick={() => alert()}
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add to cart
              </button>
            </Card.Footer>
          </Card>
        ))}
      </Flexbox>
    </main>
  );
};

export default Main;
