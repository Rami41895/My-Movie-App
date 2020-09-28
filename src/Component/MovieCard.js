import React from "react";
const Card = (props) => {
  return (
    <div className="card text-center shadow">
      <div className="overflow">
        <img src={props.imgsrc} alt="Image1" className="card-img-top" />
      </div>
      <div className="card-body text-dark">
        <h4 className="card_title">{props.Title}</h4>
        <p>{props.rating} ☆</p>
        <p className="card-text text-secondary">{props.description}</p>
        <a href="#" className="btn btn-outline-success">
          Watch it !
        </a>
      </div>
    </div>
  );
};

export default Card;
