import "../../Sass/layout/TopBar.scss";

const TopNavbar = () => {
  return (
    <header className="navContainer">
      <div className="IconContainer">Html5</div>
      <div className="headingTitleContainer">
        <p className="headingTitleContainer__word">
          Zadanie{" "}
          <span className="headingTitleContainer__word--txtBold">
            rekrutacyjne
          </span>
        </p>
      </div>
    </header>
  );
};

export default TopNavbar;
