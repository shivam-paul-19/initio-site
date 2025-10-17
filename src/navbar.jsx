import "./navbar.css";
import { useNavigate } from "react-router-dom";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";

function NavBar({active}) {
  const navigator = useNavigate();
  const activeStyle = {
    fontWeight: 900,
  };

  return (
    <div className="nav-bar">
      <div className="nav-bar-item logo"><AnimatedGradientText colorFrom="#9f1239">INITIO'25</AnimatedGradientText></div>
      <div className="nav-bar-items">
        <div
          className="nav-bar-item"
          style={active == 0 ? activeStyle : null}
          onClick={() => {
            navigator('/');
          }}
        >
          Home
        </div>
        <div
          className="nav-bar-item"
          style={active == 1 ? activeStyle : null}
          onClick={() => {
            navigator('/events');
          }}
        >
          Events
        </div>
        <div
          className="nav-bar-item"
          style={active == 2 ? activeStyle : null}
          onClick={() => {
            navigator('/sponsors');
          }}
        >
          Sponsors
        </div>
        <div
          className="nav-bar-item"
          style={active == 3 ? activeStyle : null}
          onClick={() => {
            navigator('/about');
          }}
        >
          About us
        </div>
        <div
          className="nav-bar-item"
          style={active == 4 ? activeStyle : null}
          onClick={() => {
            navigator('/contact');
          }}
        >
          Contact us
        </div>
      </div>
    </div>
  );
}

export default NavBar;
