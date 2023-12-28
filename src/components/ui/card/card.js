import React from "react";
import PropTypes from "prop-types";

const Card = (props) => {
  const { children, classProp = "" } = props;
  return (
    <div
      className={`block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ${
        classProp && classProp
      }`}
    >
      {children}
    </div>
  );
};
Card.Header = ({ children }) => (
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    {children}
  </h5>
);

Card.Body = ({ children }) => {
  return <div class="px-2 pb-2">{children}</div>;
};
Card.Footer = ({ children }) => {
  return <div class="flex items-center justify-between">{children}</div>;
};
Card.propTypes = { children: PropTypes.node };

export default Card;
