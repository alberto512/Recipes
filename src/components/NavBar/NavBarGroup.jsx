import React from "react";
import NavBar from "./NavBar";
import { NavLink } from "react-router-dom";
import { MDBIcon } from "mdbreact";
import "./NavBar.css";

function NavBarGroup() {
  const navBarRef = React.useRef();

  const openNavBar = () => {
    navBarRef.current.openNavBar();
  };

  return (
    <React.Fragment>
      <MDBIcon size="2x" className="icon" onClick={openNavBar} icon="bars" />

      <NavBar ref={navBarRef}>
        <div className="div-nav-bar">
          <div className="div-nav-elements">
            <ul>
              <li>
                <NavLink exact activeClassName="current" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink exact activeClassName="current" to="/recipes">
                  Recipes
                </NavLink>
              </li>
              <li>
                <NavLink exact activeClassName="current" to="/create">
                  Create
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </NavBar>
    </React.Fragment>
  );
}

export default NavBarGroup;
