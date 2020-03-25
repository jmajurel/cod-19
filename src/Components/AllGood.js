import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const AllGood = () => {

  const [t, i18n] = useTranslation();
  return(
  <div className="card allGood">
    <div>
      <h2>
        <i className="fas fa-clipboard-list" />
        {t('allGood.title')}
      </h2>
      <p>
        {t('allGood.general')}
        <span aria-label="thumb up" role="img">
          👍
        </span>
      </p>
      <p>
        {t('allGood.recommentation.careful')}
      </p>
      <p>
        {t('allGood.linkToProtectionSection1')} <Link to="/protection">Protection</Link> {t('allGood.linkToProtectionSection2')}
      </p>
    </div>
  </div>
)};

export default AllGood;
