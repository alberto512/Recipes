import React, { Component } from "react";
import InfoComponent from "../components/InfoComponent/InfoComponent";
import NavBarGroup from "../components/NavBar/NavBarGroup";

class Info extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBarGroup />
        <InfoComponent recipe={this.props.match} />
      </React.Fragment>
    );
  }
}

export default Info;
