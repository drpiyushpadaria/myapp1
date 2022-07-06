import React from "react";
import Cardimages from "./Cardimages";
const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 ms-auto">
        <div className="card">
          <img src={props.image} className="card-img-top" alt="...">
            {/* {props.subimg.map((v, i) => {
              return <Cardimages key={i} imag={props.subimg} />;
            })} */}
          </img>

          <div className="card-body">
            <h1 className="card-title">{props.title}</h1>
            <p className="card-text">{props.des}</p>
            <h3 className="card-rate">Ratings {props.rate}</h3>
            <h1 className="card-price">{props.price} Rs only</h1>
            {/* <NavLink to="/contact" className="btn btn-primary">
              Go
            </NavLink> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
