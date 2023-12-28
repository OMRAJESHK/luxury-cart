import React, { useEffect, useState } from "react";
import { useTheme } from "../../../hooks/useTheme";
import { getProductsByCategory } from "../../../store/productSlice";
import Switch from "../switch/switch";
import HeartIcon from "../../../assets/svg/heartIcon";
import ShoppingCartIcon from "../../../assets/svg/shoppingCartIcon";
import { categories } from "./constants";
import SearchIcon from "../../../assets/svg/searchIcon";
import Input from "../input/input";
import Select from "../select/select";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();
  const { darkMode, toggleDarkMode } = useTheme();
  const [category, setCategory] = useState(0);
  const inputClasses = `bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`;

  const onCategoryChangeHandler = (e) => {
    const { value } = e.target;
    const payload = { categoryId: value };
    dispatch(getProductsByCategory(payload));
    setCategory(value);
  };

  useEffect(() => {
    const payload = { categoryId: 0 };
    dispatch(getProductsByCategory(payload));
  }, []);

  return (
    <nav
      class={`${
        darkMode ? "dark" : "bg-white"
      } flex justify-between px-10 py-5 items-center border shadow-md`}
    >
      <h1 class="text-xl text-gray-800 font-bold dark:text-white">
        Luxury Cart
      </h1>
      <div class="flex items-center">
        <div class="flex items-center mx-2">
          <Select
            id="category"
            classNames={`${inputClasses}`}
            options={categories}
            label="Categories"
            onChange={onCategoryChangeHandler}
            value={category}
          />
        </div>
        <div class="flex items-center bg-gray-50 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 mx-2">
          <Input
            id="search"
            classProp={inputClasses}
            type="search"
            name="search"
            placeholder="Search..."
            onChange={() => {}}
          />
          <SearchIcon />
        </div>
        <ul class="flex items-center space-x-6">
          <li>
            <HeartIcon />
          </li>
          <li>
            <ShoppingCartIcon />
          </li>
          <li className="ml-2">
            <Switch onChange={toggleDarkMode} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
