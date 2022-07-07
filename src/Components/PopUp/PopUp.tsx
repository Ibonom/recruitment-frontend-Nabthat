import "../../Sass/components/PopUp.scss";
import { useContext } from "react";
import DataContext from "../../Context/DataProvider";

const PopUp = () => {
  const ctx = useContext(DataContext);
  const clickHandler = () =>{
    ctx.setWarningShow(false)
  }
  return (
    <>
      {ctx.warningShow && (
        <div className=" PopUpWrapper--warning">
          <p className="PopUpWrapper__text">
            <span className="PopUpWrapper__tittle">Uwaga!</span> Nie możesz wykonać tej akcji
          </p>
          <button className="PopUpWrapper__closer" onClick={clickHandler}>X</button>
        </div>
      )}
    </>
  );
};

export default PopUp;
