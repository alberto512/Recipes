import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import bsCustomFileInput from "bs-custom-file-input";
import axios from "axios";
import { Formik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
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
    const formData = new FormData();
    let file;

    const schema = Yup.object({
      title: Yup.string().required("Write a title for your recipe"),
      category: Yup.string()
        .oneOf(
          ["Appetizers", "Breakfast", "Lunch", "Dinner", "Dessert", "Beverage"],
          "Select one category"
        )
        .required("Select one category"),
      steps: Yup.string().required("Write some steps"),
      image: Yup.string().required(),
    });

    const customChange = (event) => {
      file = event.target.files[0];
    };

    const handleSubmit = (item) => {
      formData.append("title", item.title);
      formData.append("category", item.category);
      formData.append("steps", item.steps);
      formData.append("image", file, item.image);

      axios
        .post(
          "https://recipes-backend-web.herokuapp.com/api/recipes/",
          formData
        )
        .then(() => {
          Swal.fire({
            title: "Good job!",
            text: "Your recipe has been submited",
            icon: "success",
            onClose: () => {
              window.location.reload(false);
            },
          });
        })
        .catch((error) => {
          Swal.fire({
            title: "Oops...",
            text: "Something went wrong",
            icon: "error",
            onClose: () => {
              window.location.reload(false);
            },
          });
        });
    };

    return (
      <Card className="custom-card">
        <Card.Header>Create new recipe</Card.Header>
        <Card.Body>
          <Formik
            validationSchema={schema}
            onSubmit={handleSubmit}
            initialValues={{ title: "", category: "", steps: "", image: "" }}
          >
            {({ handleSubmit, handleChange, values, errors }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Form.Row>
                  <Form.Group as={Col} controlId="form-grid-name">
                    <Form.Label className="label">Name</Form.Label>
                    <Form.Control
                      name="title"
                      value={values.title}
                      onChange={handleChange}
                      isInvalid={!!errors.title}
                      placeholder="Recipe's name"
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.title}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} controlId="form-grid-category">
                    <Form.Label className="label">Category</Form.Label>
                    <Form.Control
                      name="category"
                      value={values.category}
                      onChange={handleChange}
                      isInvalid={!!errors.category}
                      as="select"
                    >
                      <option>Select category</option>
                      <option>Appetizers</option>
                      <option>Breakfast</option>
                      <option>Lunch</option>
                      <option>Dinner</option>
                      <option>Dessert</option>
                      <option>Beverage</option>
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">
                      {errors.category}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>

                <Form.Group controlId="form-grid-steps">
                  <Form.Label className="label">List the steps</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows="5"
                    name="steps"
                    value={values.steps}
                    onChange={handleChange}
                    isInvalid={!!errors.steps}
                    placeholder="1."
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.steps}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="form-grid-image">
                  <Form.File
                    id="image"
                    name="image"
                    value={values.image}
                    onChange={(event) => {
                      handleChange(event);
                      customChange(event);
                    }}
                    isInvalid={!!errors.image}
                    label="Upload your recipe's image"
                    accept=".jpg,.png"
                    custom
                  />
                </Form.Group>

                <Button
                  variant="warning"
                  type="submit"
                  //onClick={this.handleSubmit}
                >
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </Card.Body>
      </Card>
    );
  }
}

export default FormComponent;
