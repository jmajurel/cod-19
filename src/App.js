import React from "react";
import "./styles.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Screening from "./Screening";
import Home from "./Home";
import Protection from "./Protection";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
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
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
