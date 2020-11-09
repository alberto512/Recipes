import React, { Component } from "react";
import axios from "axios";
import "./InfoComponent.css";

class InfoComponent extends Component {
  state = {
    recipe: [],
    steps_splitted: [],
  };

  async getData() {
    let data = await axios
      .get(
        "https://recipes-backend-web.herokuapp.com/api/recipes/" +
          this.props.recipe.params.id
      )
      .then(function (response) {
        return response.data;
      });

    this.setState({ recipe: data });
    var splitted = this.state.recipe.steps.split("\n");
    this.setState({ steps_splitted: splitted });
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <h1>{this.state.recipe.title}</h1>
          <h3>{this.state.recipe.category}</h3>
          {this.state.steps_splitted.map((value, index) => {
            return <h5 key={index}>{value}</h5>;
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default InfoComponent;
