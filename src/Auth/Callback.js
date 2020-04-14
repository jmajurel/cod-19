import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import auth0Client from "./Auth";

class Callback extends Component {
  async componentDidMount() {
    await auth0Client.handleAuthentication();
    this.props.onFinalPhase(auth0Client.getProfile());
    auth0Client.isNewAccount()
      ? this.props.history.replace("/profile")
      : this.props.history.replace("/");
  }

  render() {
    return <p>Loading profile...</p>;
  }
}

export default withRouter(Callback);
