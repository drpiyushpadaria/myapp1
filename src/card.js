import React, { useState } from "react";
import Mdata from "./mdata";
import MenuItems from "./MenuItems";
import TabMenu from "./Tab";

const allCatValues = [
  ...new Set(
    Mdata.map((curEle) => {
      return curEle.catagory;
    })
  ),
  "ALL",
];
// console.log(allCatValues);

const Card = () => {
  const [items, setItems] = useState(Mdata);
  const [catItems, setcatItems] = useState(allCatValues);
  // console.log(catItems);

  const filterItems = (v) => {
    if (v === "ALL") {
      setItems(Mdata);
      return;
    }
    const updatedItems = Mdata.filter((ele) => {
      return ele.catagory === v;
    });
    setItems(updatedItems);
  };

  return (
    <>
      <h1 className="mt-5 text-center main-heading">
        Order Your Favourite Dish
      </h1>
      <hr />

      <TabMenu filterItems={filterItems} catItems={catItems} />
      <MenuItems items={items} />
    </>
  );
};
export default Card;
