import React from "react";
import "../../Sass/layout/Footer.scss";
import AnimatedBox from "../AnimatedBox/AnimatedBox";
import ButtonSCSS from "../ButtonWithoutJS/ButtonSCSS";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer__wrapper">
        <AnimatedBox />
        <span className="footer__companyName">nabthat</span>
        <ButtonSCSS />
      </section>
    </footer>
  );
};

export default Footer;

