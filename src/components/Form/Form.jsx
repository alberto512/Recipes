import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import bsCustomFileInput from "bs-custom-file-input";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Form.css";

class FormComponent extends Component {
  state = {};

  componentDidMount() {
    (function () {
      bsCustomFileInput.init();
    })();
  }

  render() {
    return (
      <Card className="custom-card">
        <Card.Header>Create new recipe</Card.Header>
        <Card.Body>
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="form-grid-name">
                <Form.Label className="label">Name</Form.Label>
                <Form.Control placeholder="Recipe's name" />
              </Form.Group>

              <Form.Group as={Col} controlId="form-grid-category">
                <Form.Label className="label">Category</Form.Label>
                <Form.Control as="select">
                  <option>Select category</option>
                  <option>...</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="form-grid-steps">
              <Form.Label className="label">List the steps</Form.Label>
              <Form.Control as="textarea" rows="5" placeholder="1." />
            </Form.Group>

            <Form.Group controlId="form-grid-image">
              <Form.File id="image" label="Upload your recipe's image" custom />
            </Form.Group>

            <Button variant="warning" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    );
  }
}

export default FormComponent;
