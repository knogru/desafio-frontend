import React from "react";

const Card = (props) => {
  return (
    <div id={props.id} className="card">
      <img src={props.url} alt={props.title} />
      <div class="purpose">{props.purpose}</div>
      <div>
        <h1 className="title">{props.title}</h1>
        <p className="address">{props.address}</p>

        <div>
          <span className="price">{props.price} €</span>
          <div>
            <span className="rooms">{props.numberOfRooms} Zimmer</span>
            <span className="divider"></span>
            <span className="space">ab {props.space} m²</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
