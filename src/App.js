import React, { useState } from "react";
import "./styles.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Screening from "./Containers/Screening";
import Situation from "./Containers/Situation";
import Home from "./Components/Home";
import Protection from "./Components/Protection";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Callback from "./Auth/Callback";
import Profile from "./Components/Profile";
import auth0Client from "./Auth/Auth";
import i18n from "i18next";

export default function App() {
  const [profile, setProfile] = useState({});
  function handleConnexion(profile) {
    setProfile(profile);
  }
  i18n.changeLanguage(navigator.language.split("-")[0]);
  return (
    <div className="App">
      <div className="background"></div>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/(home|)">
            <Home />
          </Route>
          <Route path="/screening">
            <Screening />
          </Route>
          <Route path="/protection">
            <Protection />
          </Route>
          <Route path="/situation">
            <Situation />
          </Route>
          <Route exact path="/callback">
            <Callback onFinalPhase={handleConnexion} />
          </Route>
          <Route path="/profile">
            <Profile profile={profile} />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
