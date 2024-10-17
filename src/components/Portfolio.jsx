import React from "react";
import { Area } from "./Area";
import { ListElement } from "./ListElement";
import { projects } from "../projects";

export const Portfolio = () => {
  return (
    <Area>
      <div className="text-center">
        <h1 className="childrenTitle">Portfolio</h1>
      </div>
      <div>
        <h6 className="text-center">
          The Projects I've made. They are all at{" "}
          <a href="https://github.com/SAMG1207" target="_blank">
            My Github
          </a>
        </h6>
      </div>
      <div className="container">
        <ul className="list-unstyled mt-5">
          {projects.map((project, index) => (
            <ListElement
              key={index}
              title={project.title}
              description={project.description}
              links={project.links}
            />
          ))}
        </ul>
      </div>
    </Area>
  );
};
