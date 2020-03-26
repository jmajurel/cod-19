import React from "react";
import { useTranslation } from "react-i18next";
import "./Protection.css";

const Protection = () => {
  const [t, i18n] = useTranslation();
  return (
    <div className="protection card">
      <h2>{t("protection.title")}</h2>
      <div className="actions">
        <h3>{t("protection.introduction")}</h3>
        <ol>
          <li>
            {t("protection.actions.handGel1")}{" "}
            <span role="img" aria-label="soap">
              🧼
            </span>
            <span aria-label="hand" role="img">
              👏
            </span>{" "}
            {t("protection.actions.handGel2")}{" "}
            <span aria-label="hydroalcolic gel" role="img">
              🧴
            </span>
          </li>
          <li>
            {t("protection.actions.sneezingCoughing1")}{" "}
            <span role="img" aria-label="sneezing/coughing">
              🤧
            </span>{" "}
            {t("protection.actions.sneezingCoughing2")}
          </li>
          <li>{t("protection.actions.tissue")}</li>
          <li>
            {t("protection.actions.shackHandHuge1")}{" "}
            <span aria-label="stop" role="img">
              🚫
            </span>
            <span role="img" aria-label="handshack">
              🤝
            </span>{" "}
            {t("protection.actions.shackHandHuge2")}
          </li>
        </ol>
      </div>

      <div className="transmission">
        <h3>{t("protection.transmissions.subTitle")}</h3>
        <p>{t("protection.transmissions.splutters")}</p>
        <p>{t("protection.transmissions.distance")}</p>
      </div>
    </div>
  );
};

export default Protection;
