import React from "react";
import PropTypes from "prop-types";

const Input = (props) => {
  const {
    id = "",
    classProp = "",
    type = "text",
    name = "text",
    placeholder = "",
    onChange = () => {},
    min = undefined,
    max = undefined,
    value = "",
    step = "",
    checked = undefined,
  } = props;
  return (
    <input
      className={classProp}
      type={type}
      name={name}
      id={`${id ? id : "lc-" + name}`}
      placeholder={placeholder}
      onChange={onChange}
      min={min}
      max={max}
      value={value}
      step={step}
      checked={checked}
    />
  );
};

Input.propTypes = {
  classProp: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.string,
  step: PropTypes.string,
  checked: PropTypes.oneOfType([PropTypes.any, PropTypes.bool]),
};

export default Input;
