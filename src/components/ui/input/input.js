import React from "react";
import PropTypes from "prop-types";

const Input = (props) => {
  const {
    id = "",
    classNames = "",
    type = "text",
    name = "text",
    placeholder = "",
    onChange = () => {},
  } = props;
  return (
    <input
      className={classNames}
      type={type}
      name={name}
      id={`${id ? id : "lc-" + name}`}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

Input.propTypes = {
  classNames: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;
