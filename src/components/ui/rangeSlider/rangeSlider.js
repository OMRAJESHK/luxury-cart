import React from "react";
import PropTypes from "prop-types";
import Input from "../input/input";

const RangeSlider = (props) => {
  const {
    id = "minmax-range",
    min = undefined,
    max = undefined,
    value = "",
    onChange = () => {},
    label = "",
    step = undefined,
  } = props;
  return (
    <div className="relative" title={`₹ ${Number(value).toFixed(2)}/-`}>
      {label && (
        <label
          htmlFor="minmax-range"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          {label}
        </label>
      )}

      <Input
        id={id}
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={onChange}
        step={step}
        classProp="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      />
      <span class="text-sm text-gray-500 dark:text-gray-400 absolute start-1 -bottom-6">
        {min && `Min: ₹ ${Number(min).toFixed(2)}/-`}
      </span>
      <span class="text-sm text-gray-500 dark:text-gray-400 absolute end-1 -bottom-6">
        {max && `Max: ₹ ${Number(max).toFixed(2)}/-`}
      </span>
    </div>
  );
};

RangeSlider.propTypes = {
  id: PropTypes.string,
  min: PropTypes.oneOfType([PropTypes.any, PropTypes.string]),
  max: PropTypes.oneOfType([PropTypes.any, PropTypes.string]),
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default RangeSlider;
