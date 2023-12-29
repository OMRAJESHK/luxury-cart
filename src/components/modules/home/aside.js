import React, { useState } from "react";
import classes from "./home.module.css";
import PriceRange from "./priceRange";
import { companies } from "../../../store/data";
import Input from "../../ui/input/input";
import { getProductsByCompanies } from "../../../store/productSlice";
import { useDispatch, useSelector } from "react-redux";

const Aside = () => {
  const dispatch = useDispatch();
  const { category } = useSelector((state) => state.product);

  const [checked, setChecked] = useState(0);
  const updatedCompanies = category
    ? companies
        .map((company) => {
          if (company.category === +category)
            return { ...company, isChecked: false };
        })
        .filter((x) => x)
    : companies.map((company) => {
        return { ...company, isChecked: false };
      });
  const [selectedCompanies, setSelectedCompanies] = useState([]);

  const onCheckboxChangeHandler = (id) => {
    let updatedCompanies = [];
    const indexToRemove = selectedCompanies.indexOf(id);
    if (indexToRemove !== -1) {
      updatedCompanies = selectedCompanies.toSpliced(indexToRemove, 1);
    } else {
      updatedCompanies = [...selectedCompanies, id];
    }
    setChecked(!checked);
    setSelectedCompanies(updatedCompanies);
    dispatch(getProductsByCompanies({ companyIds: updatedCompanies }));
  };

  return (
    <aside className={`${classes["aside-wrapper"]}`}>
      <PriceRange />
      <hr className="my-10" />
      <div className="my-10 p-2">
        <h6 class="my-5 font-extrabold dark:text-white">filter by company</h6>
        {updatedCompanies.map((company) => (
          <div
            key={company.id}
            class="flex items-center mb-4"
            onChange={() => onCheckboxChangeHandler(company.id)}
          >
            <Input
              type="checkbox"
              checked={companies.isChecked}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            {company.name && (
              <label
                for="default-checkbox"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                {company.name}
              </label>
            )}
          </div>
        ))}
      </div>
      <hr className="my-10" />
    </aside>
  );
};

export default Aside;
