import "../../Sass/layout/TopBar.scss";
import { useContext } from "react";
import DataContext from "../../Context/DataProvider";
import Svg from "./Svg";
const TopNavbar = () => {
  const ctx = useContext(DataContext);
  return (
    <header className="navContainer">
      <div className="IconContainer">
        <Svg />
      </div>
      <div className="headingTitleContainer">
        <p className="headingTitleContainer__word">
          Zadanie{" "}
          <span className="headingTitleContainer__word--txtBold">
            rekrutacyjne
          </span>
          <p className="headingTitleContainer__word--hiddenName">{ctx.name}</p>
        </p>
      </div>
    </header>
  );
};

export default TopNavbar;
