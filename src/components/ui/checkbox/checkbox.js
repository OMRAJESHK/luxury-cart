import React from "react";
import PropTypes from "prop-types";
import Input from "../input/input";

const Checkbox = (props) => {
  const {
    value = "",
    label = "",
    onChange = () => {},
    checked = false,
  } = props;

  return (
    <div class="flex items-center mb-4">
      <Input
        id="default-checkbox"
        type="checkbox"
        checked={checked}
        value={value}
        onChange={onChange}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      {label && (
        <label
          for="default-checkbox"
          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          {label}
        </label>
      )}
    </div>
  );
};

Checkbox.propTypes = {};

export default Checkbox;
