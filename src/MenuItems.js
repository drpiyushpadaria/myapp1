import React from "react";

const MenuItems = (props) => {
  return (
    <>
      <div className="menu-items container-fluid mt-5">
        <div className="row">
          <div className="col-11 mx-auto">
            <div className="row my-5">
              {props.items.map((v) => {
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
                            {/* <a href="#"> */}
                            <button className="btn btn-primary">
                              Order Now
                            </button>
                            {/* </a> */}
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

export default MenuItems;
