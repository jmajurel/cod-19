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
        In france: <strong>+33 (0) 800 130 000</strong> (please note this number
        cannot give any medical advice) For medical advice, Call the{" "}
        <strong>15</strong> or <strong>114</strong>.
      </p>
      <p>
        Secondly, to protect other people please stay at home and limitate any
        contact with others.
      </p>
      <p>
        If possible, please wear a medical mask{" "}
        <span role="img" aria-label="face mask">
          😷
        </span>{" "}
        especially if you are coughing
      </p>
    </div>
  );
};

export default PotentialSickCase;
