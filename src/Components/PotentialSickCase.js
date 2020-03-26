import React from "react";
import { useTranslation } from "react-i18next";

const PotentialSickCase = () => {
  const [t, i18n] = useTranslation();
  return (
    <div className="card">
      <h2>
        <i className="fas fa-clipboard-list" />
        {t("potentialSickCase.title")}
      </h2>
      <p>{t("potentialSickCase.general")}</p>
      <p>{t("potentialSickCase.detail1")}</p>
      <p>{t("potentialSickCase.detail2")}</p>
      <p>{t("potentialSickCase.detail3")}</p>
      <p>
        {t("potentialSickCase.contact.detail1")}: <strong>+33 (0) 800 130 000</strong> {t("potentialSickCase.contact.detail2")} {" "}
        <strong>15</strong> {t("potentialSickCase.contact.detail3")} <strong>114</strong>.
      </p>
      <p>{t("potentialSickCase.recommentation.limitContact")}</p>
      <p>
      {t("potentialSickCase.recommentation.wearMask1")} 
        <span role="img" aria-label="face mask">
          😷
        </span>{" "}
        {t("potentialSickCase.recommentation.wearMask2")} 
      </p>
    </div>
  );
};

export default PotentialSickCase;
