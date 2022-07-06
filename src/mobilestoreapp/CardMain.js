import React, { useEffect, useState } from "react";
import Card from "./card";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

const CardMain = () => {
  const [item, setItem] = useState();
  useEffect(() => {
    let mdata = async () => {
      try {
        let res = await fetch(
          "https://dummyjson.com/products/category/smartphones"
          // "https://dummyjson.com/products/search?q=Laptop"
        );
        if (!res.ok) {
          throw Error(res.statusText);
        }

        let data = await res.json();
        setItem(data);
      } catch (err) {
        console.log(err);
      }
    };
    mdata();
  }, []);
  console.log(item);
  if (item) {
    let items = item.products;
    console.log(items);
    return (
      <>
        <div className="my-5">
          <h1 className="tab-center">Mobile Store</h1>
        </div>
        <div className="container-fluid mb-5">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row gy-4">
                {items.map((v, i) => {
                  return (
                    <Card
                      key={items[i].id}
                      title={items[i].title}
                      des={items[i].description}
                      image={items[i].thumbnail}
                      rate={items[i].rating}
                      price={items[i].price}
                      subimg={items[i].images}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
  }
};
export default CardMain;
