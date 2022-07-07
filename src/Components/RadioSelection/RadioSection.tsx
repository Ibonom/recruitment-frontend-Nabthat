import { useContext } from "react";
import "../../Sass/layout/radioInput.scss";
import DataContext from "../../Context/DataProvider";

const RadioSection = () => {
  const radioContext = useContext(DataContext);
  const radioHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    radioContext.setRadio(e.target.value);

  return (
    <section className="radioBlock">
      <label className="radioBlock__tittle">BLOK PIERWSZY</label>
      <div onChange={radioHandler}>
        <p>
          <label className="radioContainer">
            <input type="radio" name="text" id="optionNr1" value="first" />
            <span className="radioContainer__checkmark"></span>
            <label htmlFor="optionNr1" className="radioContainer__label">
              Opcja pierwsza
            </label>
          </label>
        </p>
        <p>
          <label className="radioContainer">
            <input type="radio" name="text" id="optionNr2" value="second" />
            <span className="radioContainer__checkmark"></span>
            <label htmlFor="optionNr2" className="radioContainer__label">
              Opcja druga
            </label>
          </label>
        </p>
        <p>
          <label className="radioContainer">
            <input type="radio" name="text" id="optionNr3" value="random" />
            <span className="radioContainer__checkmark"></span>
            <label htmlFor="optionNr3" className="radioContainer__label">
              Opcja losowa
            </label>
          </label>
        </p>
      </div>
    </section>
  );
};

export default RadioSection;
