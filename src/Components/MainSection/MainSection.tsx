import "../../Sass/layout/MainSection.scss";
import ButtonMainSection from "../ButtonsMainSection/ButtonMainSection";
import RadioSection from "../RadioSelection/RadioSection";
import "../../Sass/layout/MiddleWrapper.scss";
import TextSection from "../TextSection/TextSection";

const MainSection = () => {
  return (
    <main className="mainSection">
      <h1 className="mainSection__h1">Nagłówek H1</h1>
      <hr className="mainSection__line" />
      <section className="middleWrapper">
        <RadioSection />
        <ButtonMainSection />
        <TextSection />
      </section>
    </main>
  );
};

export default MainSection;
