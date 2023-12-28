import React, { useState } from "react";
import classes from "./home.module.css";
import Checkbox from "../../ui/checkbox/checkbox";
import PriceRange from "./priceRange";

const Aside = () => {
  const [checked, setChecked] = useState(0);

  const onCheckboxChangeHandler = () => {
    setChecked(!checked);
  };
  return (
    <aside className={`${classes["aside-wrapper"]}`}>
      <PriceRange />
      <hr className="my-10" />
      <div className="my-10 p-2">
        <h6 class="my-5 font-extrabold dark:text-white">filter by company</h6>
        <Checkbox
          label="Nokia"
          checked={checked}
          onChange={onCheckboxChangeHandler}
        />
      </div>
      <hr className="my-10" />
    </aside>
  );
};

export default Aside;
