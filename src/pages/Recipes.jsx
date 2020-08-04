import React from "react";
import NavBarGroup from "../components/NavBar/NavBarGroup";
import SearchBar from "../components/SearchBar/SearchBar";
import RecipeCard from "../components/RecipeCard/RecipeCard";
import "./Recipes.css";

const Recipes = () => {
  return (
    <React.Fragment>
      <NavBarGroup />
      <SearchBar />
      <div className="recipe-card">
        <RecipeCard />
      </div>
    </React.Fragment>
  );
};

export default Recipes;
