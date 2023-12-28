import React from "react";
import PropTypes from "prop-types";

const Select = (props) => {
  const {
    options = [],
    id = "",
    classNames = "",
    label = "",
    onChange = () => {},
  } = props;

  return (
    <>
      {label && (
        <label
          htmlFor={label}
          className="block text-sm font-medium text-gray-900 dark:text-white mr-1"
        >
          {label}
        </label>
      )}

      <select id={id} className={classNames} onChange={onChange}>
        <option disabled value={0}>
          {`select ${label}`}
        </option>
        {options.map((option) => (
          <option key={option.id} selected value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
};

Select.propTypes = {
  id: PropTypes.string,
  options: PropTypes.array.isRequired,
  classNames: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
};

export default Select;
