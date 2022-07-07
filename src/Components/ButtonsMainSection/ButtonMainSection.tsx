import Button from "../Button/Button";
import "../../Sass/layout/ButtonWrapper.scss";
import { useContext } from "react";
import DataContext from "../../Context/DataProvider";

const ButtonMainSection = () => {
  const ctx = useContext(DataContext);

  const onClick1 = () => {
    if (ctx.radio === "") {
      ctx.setWarningShow(true);
    } else {
      ctx.setWarningShow(false);
    }
    if (ctx.radio === "first") {
      ctx.validationFunction(ctx.data[0], false);
    } else if (ctx.radio === "second") {
      ctx.validationFunction(ctx.data[1], false);
    } else if (ctx.radio === "random") {
      ctx.randomFunction(false);
    }
  };
  const onClick2 = () => {
    if (ctx.radio === "") {
      ctx.setWarningShow(true);
    } else {
      ctx.setWarningShow(false);
      if (ctx.radio === "first") {
        ctx.validationFunction(ctx.data[0], true);
      } else if (ctx.radio === "second") {
        ctx.validationFunction(ctx.data[1], true);
      } else if (ctx.radio === "random") {
        ctx.randomFunction(true);
      }
    }
  };

  return (
    <section className="buttonWrapper">
      <label className="buttonWrapper__title">BLOK DRUGI</label>
      <div className="buttonWrapper__buttons">
        <Button text="ZASTĄP" onClick={onClick1} />
        <Button text="DOKLEJ" onClick={onClick2} />
      </div>
    </section>
  );
};

export default ButtonMainSection;
