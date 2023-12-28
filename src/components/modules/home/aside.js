import React, { useState } from "react";
import classes from "./home.module.css";
import RangeSlider from "../../ui/rangeSlider/rangeSlider";
import Checkbox from "../../ui/checkbox/checkbox";

const Aside = () => {
  const [range, setRange] = useState(0);
  const [checked, setChecked] = useState(0);

  const onRangeChangeHandler = (e) => {
    const { value } = e.target;
    setRange(value);
  };

  const onCheckboxChangeHandler = () => {
    setChecked(!checked);
  };
  return (
    <aside className={`${classes["aside-wrapper"]}`}>
      <div className="p-2">
        <h6 class="my-10 font-extrabold dark:text-white">filter by Price</h6>
        <RangeSlider
          min="10"
          max="100"
          step="5"
          value={range}
          onChange={onRangeChangeHandler}
        />
      </div>
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
