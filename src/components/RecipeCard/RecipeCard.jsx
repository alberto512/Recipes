import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CardDeck } from "react-bootstrap";
import $ from "jquery";
import axios from "axios";
import "./RecipeCard.css";

import { NavLink } from "react-router-dom";

function Empty(props) {
  const cont = props.counter;
  if (cont === 0) {
    return (
      <div className="container">
        <h1>No matching recipes</h1>
      </div>
    );
  } else {
    return <p></p>;
  }
}

function CheckCards(cont) {
  let c = cont % 3;
  if (c === 1) {
    return (
      <React.Fragment>
        <Card className="recipe_hidden">
          <Card.Img variant="top" />
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text></Card.Text>
            <Button variant="primary">View More</Button>
          </Card.Body>
        </Card>
        <Card className="recipe_hidden">
          <Card.Img variant="top" />
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text></Card.Text>
            <Button variant="primary">View More</Button>
          </Card.Body>
        </Card>
      </React.Fragment>
    );
  } else if (c === 2) {
    return (
      <Card className="recipe_hidden">
        <Card.Img variant="top" />
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text></Card.Text>
          <Button variant="primary">View More</Button>
        </Card.Body>
      </Card>
    );
  } else {
    return <p></p>;
  }
}

class RecipeCard extends Component {
  state = {
    myArray: [],
  };

  async getData() {
    let arrayaux2 = await axios
      .get("https://recipes-backend-web.herokuapp.com/api/recipes/")
      .then(function (response) {
        let auxArray = [[]];
        let i = 0;
        let j = 0;
        for (let aux in response.data) {
          if (j === 3) {
            j = 0;
            i++;
            auxArray[i] = [];
          }
          auxArray[i].push(response.data[aux]);
          j++;
        }
        return auxArray;
      });

    this.setState({ myArray: arrayaux2 });
  }

  async getDataCustom(value) {
    let arrayaux2 = await axios
      .get("https://recipes-backend-web.herokuapp.com/api/recipes/")
      .then(function (response) {
        let auxArray = [[]];
        let i = 0;
        let j = 0;
        for (let aux in response.data) {
          if (j === 3) {
            j = 0;
            i++;
            auxArray[i] = [];
          }
          if (response.data[aux].title.includes(value)) {
            auxArray[i].push(response.data[aux]);
            j++;
          }
        }
        return auxArray;
      });
    this.setState({ myArray: arrayaux2 });
  }

  componentDidUpdate(prevProps) {
    if (this.props.value !== prevProps.value) {
      this.getDataCustom(this.props.value);
    }
  }

  componentDidMount() {
    $(".recipe").hover(
      function () {
        $(this).animate(
          {
            marginTop: "-=1%",
            marginBottom: "1%",
          },
          200
        );
      },

      function () {
        $(this).animate(
          {
            marginTop: "0%",
            marginBottom: "0%",
          },
          200
        );
      }
    );

    this.getData();
  }

  render() {
    let cont = 0;
    return (
      <React.Fragment>
        {this.state.myArray.map((value, index) => {
          return (
            <CardDeck className="deck" key={index}>
              {value.map((value, index) => {
                let auxstr = value.steps.substr(0, 25);
                if (value.steps.substr(25)) {
                  auxstr += "...";
                }
                cont++;
                let auxstr2 = "/RecipesWeb/info/" + value.id;
                auxstr2 = auxstr2.replace(" ", "");
                return (
                  <Card className="recipe" key={index}>
                    <Card.Img variant="top" src={value.image} />
                    <Card.Body>
                      <Card.Title>{value.title}</Card.Title>
                      <Card.Text>{auxstr}</Card.Text>
                      <NavLink exact activeClassName="current" to={auxstr2}>
                        <Button variant="primary">View More</Button>
                      </NavLink>
                    </Card.Body>
                  </Card>
                );
              })}
              {CheckCards(cont)}
            </CardDeck>
          );
        })}

        <div className="wrap">
          <Empty counter={cont} />
        </div>
      </React.Fragment>
    );
  }
}

export default RecipeCard;
