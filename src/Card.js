import React from "react";

const Card = (props) => {
  return (
    <div id={props.id} className="card">
      <img src={props.url} alt={props.title} />
      <div>
        <h1>{props.title}</h1>
        <p>{props.address}</p>

        <div>
          <span>{props.price} €</span> <span>{props.numberOfRooms} Zimmer</span>{" "}
          <span>ab {props.space} m²</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
