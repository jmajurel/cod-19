import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Home.css";

const Home = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="home card">
      <div className="cardContent">
        <h1> {t("home.title")} </h1>
        <h2>{t("home.subTitle")}</h2>
        <Link className="link" to="/screening">
          {t("home.launchBtn")}
          <i className="fas fa-rocket" />
        </Link>
      </div>
    </div>
  );
};

export default Home;
