import React from "react";
import PropTypes from "prop-types";
import { fillArrayUpTo, formatNumber } from "../../../utils/common";
import Flexbox from "../../ui/flexbox/flexbox";
import StarIcon from "../../../assets/svg/starIcon";

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

const ProductDescription = (props) => {
  const { description = "", price, ratings } = props;
  return (
    <div>
      <p className="my-10">{description}</p>
      <Flexbox justifyContent={"space-between"}>
        <span class=" font-bold text-gray-900 dark:text-white">
          {`₹${formatNumber(price ?? 0)}/-`}
        </span>
        <div class="flex items-center space-x-1 rtl:space-x-reverse">
          <GetStars ratings={ratings} />
        </div>
        <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
          {ratings}
        </span>
        <button
          onClick={() => alert()}
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add to cart
        </button>
      </Flexbox>
    </div>
  );
};

ProductDescription.propTypes = {};

export default ProductDescription;
