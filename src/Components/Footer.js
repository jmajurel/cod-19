import React from "react";
import { useTranslation } from "react-i18next";
import "./Footer.css";

const Footer = () => {
  const [t, i18next] = useTranslation();

  return (
    <div className="footer">
      <p>{t("footer.note")}</p>
      <p>{t("footer.author")}</p>
      <p>{t("footer.bckImgCredit")}</p>
      <div className="contacts">
        <a
          className="contact"
          href="https://www.linkedin.com/in/jean-f%C3%A9lix-majurel-a142235a/"
        >
          <i className="fab fa-linkedin" />
        </a>
        <a className="contact" href="https://github.com/jmajurel">
          <i className="fab fa-github" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
