import React from "react";
import { Area } from "./Area";

export const Resume = () => {
  return (
    <Area title={"Resume"}>
      <div className="p-3">
        <h2 className="text-center">Education</h2>
        <h4 className="childrenTitle">
          {" "}
          Advanced Technician in Web Application Development
        </h4>
        <p>
          I have made this Advaced Technician in Spain. This course started in
          2022 and ended up in 2024
        </p>
        <p>
          {" "}
          It gathers all necessaty knowledge to develop a web appilication
          properly, such as:
        </p>
        <ul>
          <li>
            <b>Object Oriented Programming with languages like Java and C#</b>
          </li>
          <li>
            Creation of several projects working with an API or a Database to
            request information, made with PHP or Java Servlets
          </li>
          <li>Using JQuery</li>
          <li>Using MySQL</li>
          <li>Uisng PL-SQL</li>
          <li>Making APIs with PHP</li>
          <li>Testing with PHPunit</li>
        </ul>
      </div>
      <div className="p-3 mt-1">
        <h2 className="text-center">Professional Experience</h2>
        <ul>
          <li>
            <h4 className="childrenTitle">E8D Soluciones</h4>
            <h6 className="childrenTitle">nov 24 - jan 25 in Madrid</h6>
            <p>
              E8D Soluciones is a company that provides data services to other
              companies.
            </p>
            <p>
              Also, they develop web services and applications to their clients.
              My tasks were: Development of a security form for employees with
              .NET, creation of stored procedures for this application using SQL
              Server.
            </p>
          </li>
          <li>
            <h4 className="childrenTitle">Puertas Automáticas Portis</h4>
            <h6 className="childrenTitle">jul 22 - sept 24 in Madrid</h6>
            <p>
              Portis is a company of the OTIS subsidiary, It has more than 400
              employees and provides services in Spain, Portugal and France,
              although this headquarters only provided services to Portugal and
              Spain. My tasks were: To direct the training of technicians
              throughout Spain regarding safety courses, budget and invoice
              management, development of a prevention campaign against crushing.
              In addition, contacting important customers for the installation
              of automatic doors.
            </p>
          </li>
          <li>
            <h4 className="childrenTitle">CGIT</h4>
            <h6 className="childrenTitle">jul 21 - sep 21 (Internship)</h6>
            <p>
              CGIT is a company that provides assistance for Lenovo users in
              Spain. They manage all fixings of Lenovo equipments while in
              warranty. My job here was to be sure all equipments were picked,
              fixed and delivered back to the customer.
            </p>
          </li>
        </ul>
      </div>
    </Area>
  );
};
