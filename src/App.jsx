import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Picture } from "./components/Picture";
import { List } from "./components/List";
import { Main } from "./components/Main";
import { NightMode } from "./components/NightMode";
function App() {
  const [activeSection, setActiveSection] = useState("About Me");
  const [darkmode, setDarkmode] = useState(false);
  const toggleDarkMode = () => {
    setDarkmode(!darkmode);
  };
  useEffect(() => {
    if (darkmode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkmode]);
  console.log("Icons from https://www.flaticon.es/");
  console.log("Icons from https://iconos8.es/");
  return (
    <div className={`h-100 container-fluid ${darkmode ? "dark-mode" : ""}`}>
      <div className="row mt-4">
        <div className="col-lg-4 d-flex flex-column shadow-lg justify-content-center border align-items-center rounded side m-3">
          <Picture></Picture>
          <div className=" text-start w-100 ms-4 mt-5 p-3">
            <List onItemClick={setActiveSection}></List>
          </div>
        </div>
        <div className="col-lg-7 d-flex flex-column rounded shadow-lg main rounded m-3 border">
          <Main activeSection={activeSection}></Main>
        </div>
        <div
          className=" d-flex flex-column justify-content-center align-items-stretch mb-3"
          style={{ flex: "0 0 auto" }}
        >
          <NightMode toggleDarkMode={toggleDarkMode} darkmode={darkmode} />
        </div>
      </div>
    </div>
  );
}

export default App;
