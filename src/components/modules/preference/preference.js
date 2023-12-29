import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import Image from "../../ui/image";
import classes from "./preference.module.css";

const Preference = (props) => {
  const products = useSelector((state) => state.product.updatedProducts);
  const wishlist = useSelector((state) => state.preference.wishlist);
  const userProducts = products.filter((product) =>
    wishlist.includes(product.id)
  );
  console.log("wishlist", products, wishlist, userProducts);

  return (
    <div className="m-10">
      <h1 class="my-10 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        User Preferences
      </h1>
      {userProducts?.length > 0 &&
        userProducts.map((product) => (
          <div
            key={product.id}
            className="flex justify-center align-center mb-6"
          >
            <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <div className={classes["image-wrapper"]}>
                <Image src={product.thumbnail} alt={product.title} />
              </div>

              <div
                className={`flex flex-col justify-between p-4 leading-normal ${classes["product-description-wrapper"]}`}
              >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {product.title}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {product.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      {userProducts.length === 0 && (
        <div className="flex justify-center align-center">
          <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div className={`flex flex-col justify-between p-4 leading-normal`}>
              <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">
                No User Preferences
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

Preference.propTypes = {};

export default Preference;
