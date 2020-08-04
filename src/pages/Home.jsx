import React from "react";
import NavBarGroup from "../components/NavBar/NavBarGroup";
import "./Home.css";

const Home = () => {
  return (
    <React.Fragment>
      <NavBarGroup />
      <div className="home">
        <div className="title">
          <h1 className="recipes">Recipes</h1>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
