import React, { useState } from "react";
import PropTypes from "prop-types";
import Flexbox from "../flexbox/flexbox";

const Image = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const {
    src = "",
    alt = "photo",
    width = 50,
    height = 50,
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
      {isLoading && !src && "Loading..."}
      {!isError && src && (
        <img
          aria-label={alt}
          className={`${classProp && classProp}`}
          src={src}
          alt={alt}
          width={width}
          height={height}
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
          styleProp={{ height: "100%" }}
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
