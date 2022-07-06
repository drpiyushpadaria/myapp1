import React from "react";

const TabMenu = (props) => {
  // {
  //   filterItems, catItems;
  // }
  console.log(props);
  return (
    <>
      <div>
        <div className="menu-tab d-flex justify-content-around">
          {props.catItems.map((curEle, i) => {
            return (
              <button
                className="btn btn-warning"
                key={i}
                onClick={() => {
                  props.filterItems({ curEle });
                }}
              >
                {curEle}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TabMenu;
