import React, { useState } from "react";

export const ListElement = ({ title, description, links }) => {
  const [visible, setVisible] = useState(false);
  const [green, SetGreen] = useState(false);

  const handleClick = () => {
    setVisible((prevVisible) => !prevVisible); // Toggle visibility
    SetGreen((prevGreen) => !prevGreen);
  };

  return (
    <li className="mt-4">
      <div className="row">
        <div className="justify-content-center">
          <h4
            className={`childrenTitle text-start border-bottom text-center ${
              green ? "text-success" : ""
            }`}
            onClick={handleClick}
          >
            {" "}
            <b>{title}</b>
          </h4>
          {visible && (
            <div className="childrenTitle p-3 rounded border border-dark shadow">
              <div>{description}</div>
              <div>
                {links.map((link, index) => (
                  <a
                    key={index}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-block"
                  >
                    Link to GitHub! {index + 1}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </li>
  );
};
