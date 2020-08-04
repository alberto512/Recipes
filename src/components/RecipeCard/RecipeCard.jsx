import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CardDeck } from "react-bootstrap";
import $ from "jquery";
import "./RecipeCard.css";

class RecipeCard extends Component {
  state = {};

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
  }

  render() {
    return (
      <React.Fragment>
        <CardDeck className="deck">
          <Card className="recipe">
            <Card.Img
              variant="top"
              src="https://sevilla.abc.es/gurme/wp-content/uploads/sites/24/2012/01/comida-rapida-casera.jpg"
            />
            <Card.Body>
              <Card.Title>Best Burger</Card.Title>
              <Card.Text>
                1.Cut the meat before adding to the table...
              </Card.Text>
              <Button variant="primary">View More</Button>
            </Card.Body>
          </Card>

          <Card className="recipe">
            <Card.Img
              variant="top"
              src="https://sevilla.abc.es/gurme/wp-content/uploads/sites/24/2012/01/comida-rapida-casera.jpg"
            />
            <Card.Body>
              <Card.Title>Best Burger 2</Card.Title>
              <Card.Text>
                1.Cut the meat before adding to the table...
              </Card.Text>
              <Button variant="primary">View More</Button>
            </Card.Body>
          </Card>

          <Card className="recipe">
            <Card.Img
              variant="top"
              src="https://sevilla.abc.es/gurme/wp-content/uploads/sites/24/2012/01/comida-rapida-casera.jpg"
            />
            <Card.Body>
              <Card.Title>Best Burger 3</Card.Title>
              <Card.Text>
                1.Cut the meat before adding to the table...
              </Card.Text>
              <Button variant="primary">View More</Button>
            </Card.Body>
          </Card>
        </CardDeck>

        <CardDeck className="deck">
          <Card className="recipe">
            <Card.Img
              variant="top"
              src="https://sevilla.abc.es/gurme/wp-content/uploads/sites/24/2012/01/comida-rapida-casera.jpg"
            />
            <Card.Body>
              <Card.Title>Best Burger 4</Card.Title>
              <Card.Text>
                1.Cut the meat before adding to the table...
              </Card.Text>
              <Button variant="primary">View More</Button>
            </Card.Body>
          </Card>

          <Card className="recipe">
            <Card.Img
              variant="top"
              src="https://sevilla.abc.es/gurme/wp-content/uploads/sites/24/2012/01/comida-rapida-casera.jpg"
            />
            <Card.Body>
              <Card.Title>Best Burger 5</Card.Title>
              <Card.Text>
                1.Cut the meat before adding to the table...
              </Card.Text>
              <Button variant="primary">View More</Button>
            </Card.Body>
          </Card>

          <Card className="recipe">
            <Card.Img
              variant="top"
              src="https://sevilla.abc.es/gurme/wp-content/uploads/sites/24/2012/01/comida-rapida-casera.jpg"
            />
            <Card.Body>
              <Card.Title>Best Burger 6</Card.Title>
              <Card.Text>
                1.Cut the meat before adding to the table...
              </Card.Text>
              <Button variant="primary">View More</Button>
            </Card.Body>
          </Card>
        </CardDeck>
      </React.Fragment>
    );
  }
}

export default RecipeCard;
