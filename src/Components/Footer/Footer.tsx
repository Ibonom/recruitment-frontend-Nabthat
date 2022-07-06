import React from "react";
import "../../Sass/layout/Footer.scss";
import AnimatedBox from "../AnimatedBox/AnimatedBox";
import ButtonSCSS from "../ButtonWithoutJS/ButtonSCSS";

const Footer = () => {
  return (
    <footer className="footer">
      <AnimatedBox />
      <ButtonSCSS />
    </footer>
  );
};

export default Footer;
