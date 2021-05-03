import React from "react";
import "./style.css";

function Cards(props) {
  return (
    <div className="cards">
      <div>
        <img alt={props.last} src={props.image}></img>
      </div>
      <div>
        {props.title} {props.first} {props.last}{" "}
      </div>
      <div>{props.gender}</div>
      <div>{props.age}</div>
      <div>{props.phone}</div>
      <div>{props.email}</div>
    </div>
  );
}

export default Cards;
