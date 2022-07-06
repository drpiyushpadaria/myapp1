import React, { useState } from "react";
import Mdata from "./mdata";

const Card = () => {
  const [items, setItems] = useState(Mdata);
  const filterItems = (v) => {
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
      <div>
        <div className="menu-tab d-flex justify-content-around">
          <button
            className="btn btn-warning"
            onClick={() => {
              filterItems("BREAKFAST");
            }}
          >
            BREAKFAST
          </button>
          <button
            className="btn btn-warning"
            onClick={() => {
              filterItems("LUNCH");
            }}
          >
            LUNCH
          </button>
          <button
            className="btn btn-warning"
            onClick={() => {
              filterItems("SNACK");
            }}
          >
            SNACK
          </button>
          <button
            className="btn btn-warning"
            onClick={() => {
              filterItems("DINNER");
            }}
          >
            DINNER
          </button>
          <button
            className="btn btn-warning"
            onClick={() => {
              setItems(Mdata);
            }}
          >
            ALL
          </button>
        </div>
      </div>
      {/* my main item section */}
      <div className="menu-items container-fluid mt-5">
        <div className="row">
          <div className="col-11 mx-auto">
            <div className="row my-5">
              {items.map((v) => {
                const { id, img, title, catagory, cost } = v;
                return (
                  <div
                    className="item1 col-12 col-md-12 col-lg-6 col-xl-4 my-5"
                    key={id}
                  >
                    <div className="row item-inside">
                      <div className="col-12 col-md-12 col-lg-4 img-div">
                        <img src={img} alt="menu pic" className="img-fluid" />
                      </div>
                      {/* menu description */}
                      <div className="col-12 col-md-12 col-lg-8">
                        <div className="main-title pt-4 pb-3">
                          <h1>{title}</h1>
                          <p>{catagory}</p>
                        </div>
                        <div className="menu-price-book">
                          <div className="price-book-divide d-flex justify-content-between ">
                            <h2>Price : {cost}</h2>
                            <a href="#">
                              <button className="btn btn-primary">
                                Order Now
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
