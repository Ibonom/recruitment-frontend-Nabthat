import Button from "../Button/Button";
import "../../Sass/layout/ButtonWrapper.scss";
import { useContext } from "react";
import DataContext from "../../Context/DataProvider";

const ButtonMainSection = () => {
  const ctx = useContext(DataContext);

  const onClick1 = () => {
    if (ctx.radio === "first") {
      ctx.validationFunction(ctx.data[0], false);
    } else if (ctx.radio === "second") {
      ctx.validationFunction(ctx.data[1], false);
    } else if (ctx.radio === "random") {
      ctx.randomSwitchFunction();
    }
  };
  const onClick2 = () => {
    if (ctx.radio === "first") {
      ctx.validationFunction(ctx.data[0], true);
    } else if (ctx.radio === "second") {
      ctx.validationFunction(ctx.data[1], true);
    } else if (ctx.radio === "random") {
      ctx.randomAddFunction();
    }
  };

  return (
    <section className="buttonWrapper">
      <label className="buttonWrapper__title">BLOK DRUGI</label>
      <Button text="ZASTĄP" onClick={onClick1} />
      <Button text="DOKLEJ" onClick={onClick2} />
    </section>
  );
};

export default ButtonMainSection;
