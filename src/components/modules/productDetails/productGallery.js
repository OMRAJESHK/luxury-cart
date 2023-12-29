import React, { useState } from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import Image from "../../ui/image";
import classes from "./productDetails.module.css";

const ProductGallery = (props) => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const product = useSelector((state) => state.product.selected);
  return (
    <div>
      <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)}>
        {product?.gallery?.map((productImg, index) => {
          return (
            <div key={index}>
              <div className={classes["product-hero-img-wrapper"]}>
                <Image
                  src={productImg}
                  alt="photo"
                  classProp={classes["product-hero-img"]}
                />
              </div>
            </div>
          );
        })}
      </Slider>
      <Slider
        asNavFor={nav1}
        ref={(slider2) => setNav2(slider2)}
        slidesToShow={
          [1, 2, 3, 4].includes(product?.gallery?.length)
            ? product.gallery.length
            : 6
        }
        swipeToSlide={true}
        focusOnSelect={true}
      >
        {product?.gallery?.map((productImg, index) => (
          <div key={index}>
            <div className={classes["product-img-wrapper"]}>
              <Image
                src={productImg}
                alt="photo"
                classProp={classes["product-img"]}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

ProductGallery.propTypes = {};

export default ProductGallery;
