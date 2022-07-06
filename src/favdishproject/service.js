import React from "react";
import Card from "./card";
import Sdata from "./mdata";

const Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="tab-center">Our Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {Sdata.map((v, i) => {
                return <Card image={v.img} title={v.title} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
