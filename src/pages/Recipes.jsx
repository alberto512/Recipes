import React, { Component } from "react";
import NavBarGroup from "../components/NavBar/NavBarGroup";
import SearchBar from "../components/SearchBar/SearchBar";
import RecipeCard from "../components/RecipeCard/RecipeCard";
import "./Recipes.css";

class Recipes extends Component {
  state = {
    value: "",
  };

  handleValue = (val) => {
    this.setState({ value: val });
  };

  render() {
    return (
      <React.Fragment>
        <NavBarGroup />
        <SearchBar value={this.handleValue} />
        <div className="recipe-card">
          <RecipeCard value={this.state.value} />
        </div>
      </React.Fragment>
    );
  }
}

export default Recipes;
