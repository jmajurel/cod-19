import React, { useState, useEffect, useRef } from "react";
import "./styles.css";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import Screening from "./Containers/Screening";
import Situation from "./Containers/Situation";
import Home from "./Components/Home";
import Protection from "./Components/Protection";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Callback from "./Auth/Callback";
import Profile from "./Components/Profile";
import SecuredRoute from "./Auth/SecuredRoute";
import i18n from "i18next";
import { getAllSpecialities } from "./Services/GP/specialityService";
import {
  getProfileByEmail,
  createProfile,
  updateProfile,
} from "./Services/GP/profileService";
import auth0Client from "./Auth/Auth";

export default function App() {
  const [profile, setProfile] = useState({});
  const [auth0Profile, setAuth0Profile] = useState({});
  const [specialities, setSpecialities] = useState([]);
  const isInitialMount = useRef(true);

  function handleConnexion(auth0Profile) {
    setAuth0Profile(auth0Profile);
  }

  function handleProfileSubmittion(newProfile) {
    try {
      if (auth0Client.isNewAccount()) {
        createProfile(newProfile).then(setProfile);
      } else {
        updateProfile(profile._id, { ...newProfile }).then(() =>
          setProfile({ ...profile, ...newProfile })
        );
      }
    } catch (err) {
      console.err(err);
    }
  }

  useEffect(() => {
    if (isInitialMount.current) isInitialMount.current = false;
    else {
      getProfileByEmail(auth0Profile.name).then((gpProfile) => {
        if (!gpProfile) setProfile({ email: auth0Profile.name });
        else setProfile(gpProfile);
      });
    }
  }, [auth0Profile]);

  useEffect(() => {
    getAllSpecialities().then(setSpecialities);
  }, []);

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
          <SecuredRoute
            path="/profile"
            component={Profile}
            componentProps={{
              existingProfile: profile,
              specialities,
              onSubmit: handleProfileSubmittion,
            }}
          />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
