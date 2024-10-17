import React from "react";
import { Area } from "./Area";

export const AboutMe = ({ key }) => {
  return (
    <Area>
      <div className="text-center childrenTitle">
        <h1>
          <b>Sergio Moreno</b>
        </h1>
        <h2>&lt;&gt; Jr. Web Developer &lt;/&gt;</h2>
      </div>
      <div className="p-5 description border-bottom">
        <p>
          Hi, I'am Sergio Moreno. <b>Full Stack Web Developer.</b>{" "}
        </p>
        <p>
          Since I describe myself as a problem-solver, I am really passionate
          about making things useful. I focus on practicality, so coding has
          been a way to find myself giving the best of me in my projects. I like
          to dive deep into challenges, breaking them down into manageable steps
          and finding the most efficient solutions.
        </p>
        <p>
          Whether it's developing a complex feature or optimizing performance, I
          aim for clean, maintainable code. I enjoy working in collaborative
          environments, where teamwork and communication can drive innovation.
          Constantly learning new technologies and improving my workflow has
          become a personal goal, as I believe there is always room for growth.
        </p>
        <p>
          In my free time, I explore emerging trends in web development,
          experiment with new tools, and work on side projects that allow me to
          hone my skills. For me, coding is not just a job—it's a passion that
          fuels my desire to make meaningful contributions through technology.
        </p>
      </div>
      <div>
        <h2 className="text-center childrenTitle mt-1">Soft Skills</h2>
        <div className="row">
          <div className="col-6 text-end">
            <ul className="list-unstyled p-2">
              <li className="clidrenTitle">
                <h5>Team-Work</h5>
              </li>
              <li className="clidrenTitle">
                <h5>Assertive</h5>
              </li>
              <li className="clidrenTitle">
                <h5>Analytical</h5>
              </li>
            </ul>
          </div>
          <div className="col-6 text-start">
            <ul className="list-unstyled p-2">
              <li classname="clidrenTitle">
                <h5>Adaptability</h5>
              </li>
              <li className="clidrenTitle">
                <h5>Learning Ability</h5>
              </li>
              <li className="clidrenTitle">
                <h5>Creativity</h5>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Area>
  );
};
