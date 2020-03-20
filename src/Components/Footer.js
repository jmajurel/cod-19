import React from "react";
import "./Footer.css";
const Footer = () => (
  <div className="footer">
    <p>
      Please note this website does not provide any profesional medical advice,
      contact your local medical autority instead
    </p>
    <p>
      This website has been created by JF MAJUREL using public information in
      the aim of fighting COVID-19
    </p>
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

export default Footer;
