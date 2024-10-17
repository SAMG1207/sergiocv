import React from "react";
import { useState } from "react";
import { AboutMe } from "./AboutMe";
import { Portfolio } from "./Portfolio";
import { Skills } from "./Skills";
import { Resume } from "./Resume";
import { Contact } from "./Contact";
import { List } from "./List";
export const Main = ({ activeSection }) => {
  const renderSection = () => {
    switch (activeSection) {
      case "About Me":
        return <AboutMe></AboutMe>;

      case "Portfolio":
        return <Portfolio />;

      case "Skills":
        return <Skills />;

      case "Resume":
        return <Resume />;

      case "Contact":
        return <Contact />;
    }
  };

  return <div id={activeSection}>{renderSection()}</div>;
};
