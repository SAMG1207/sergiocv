import React from "react";
import { elements } from "../elements";

export const List = ({ onItemClick }) => {
  return (
    <>
      {elements.map((element, index) => (
        <div
          key={index}
          className=" childrenTitle list-item d-flex mb-2 align-items-center text-center border-bottom listC shadow-lg w-100"
          onClick={() => onItemClick(element.description)}
        >
          <img src={element.img} alt={element.description} className="icon" />
          <h3 className="align-self-center ms-3 text-center flex-grow-1 text-shadow">
            {element.description}
          </h3>
        </div>
      ))}
    </>
  );
};
