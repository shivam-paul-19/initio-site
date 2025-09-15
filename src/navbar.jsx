import "./navbar.css";
import { useState } from "react";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";

function NavBar({setPage}) {
  let [active, setActive] = useState([true, false, false, false]);

  const changePages = (idx) => {
    let newArr = [false, false, false, false];
    newArr[idx] = true;
    setActive(newArr);
    setPage(newArr);
  }

  const activeStyle = {
    fontWeight: 900,
  };

  return (
    <div className="nav-bar">
      <div className="nav-bar-item logo"><AnimatedGradientText colorFrom="#9f1239">Initio'25</AnimatedGradientText></div>
      <div className="nav-bar-items">
        <div
          className="nav-bar-item"
          style={active[0] ? activeStyle : null}
          onClick={() => {
            changePages(0);
          }}
        >
          Home
        </div>
        <div
          className="nav-bar-item"
          style={active[1] ? activeStyle : null}
          onClick={() => {
            changePages(1);
          }}
        >
          Sponsers
        </div>
        <div
          className="nav-bar-item"
          style={active[2] ? activeStyle : null}
          onClick={() => {
            changePages(2);
          }}
        >
          About us
        </div>
        <div
          className="nav-bar-item"
          style={active[3] ? activeStyle : null}
          onClick={() => {
            changePages(3);
          }}
        >
          Contact us
        </div>
      </div>
    </div>
  );
}

export default NavBar;
