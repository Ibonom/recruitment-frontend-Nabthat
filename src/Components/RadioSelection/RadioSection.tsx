import { useContext } from "react";
import "../../Sass/components/radioInput.scss";
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
          <label className="custom-radio-btn">
            <input type="radio" name="text" id="optionNr1" value="first" />
            <span className="checkmark"></span>
            <label htmlFor="optionNr1" className="label">
              Opcja pierwsza
            </label>
          </label>
        </p>
        <p>
          <input type="radio" name="text" id="optionNr2" value="second" />
          <label htmlFor="optionNr2">Opcja druga</label>
        </p>
        <p>
          <input type="radio" name="text" id="optionNr3" value="random" />
          <label htmlFor="optionNr3">Opcja losowa</label>
        </p>
      </div>
    </section>
  );
};

export default RadioSection;
