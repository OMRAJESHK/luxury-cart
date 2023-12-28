import React, { useState } from "react";
import PropTypes from "prop-types";
import Flexbox from "../flexbox/flexbox";
import classes from "./image.module.css";

const Image = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const {
    src = "",
    alt = "photo",
    classProp = "",
    onLoad = () => {},
    onError = () => {},
    styleProp = {},
    restProps,
  } = props;

  const onImageLoad = () => {
    setIsLoading(false);
    setIsError(false);
    onLoad();
  };
  const onImageError = () => {
    setIsLoading(false);
    setIsError(true);
    onError();
  };

  return (
    <>
      {isLoading && (
        <Flexbox
          justifyContent="center"
          alignItems="center"
          styleProp={{ height: "100%", border: "1px solid" }}
        >
          Loading...
        </Flexbox>
      )}
      {!isError && src && (
        <img
          aria-label={alt}
          className={`${classProp && classProp} ${classes.image}`}
          src={src}
          alt={alt}
          onLoad={onImageLoad}
          onError={onImageError}
          style={styleProp}
          {...restProps}
        />
      )}
      {isError && (
        <Flexbox
          justifyContent="center"
          alignItems="center"
          styleProp={{ height: "100%", border: "1px solid rgb(136 134 134)" }}
        >
          Not Found
        </Flexbox>
      )}
    </>
  );
};

Image.propTypes = {
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  alt: PropTypes.string,
  classProp: PropTypes.string,
  styleProp: PropTypes.object,
  width: PropTypes.number,
  height: PropTypes.number,
  onLoad: PropTypes.func,
  onError: PropTypes.func,
  restProps: PropTypes.object,
};

export default Image;
