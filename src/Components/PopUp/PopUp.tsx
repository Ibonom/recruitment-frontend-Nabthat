import "../../Sass/components/PopUp.scss";
import { useContext } from "react";
import DataContext from "../../Context/DataProvider";

const PopUp = () => {
  const ctx = useContext(DataContext);
  return (
    <>
      {ctx.warningShow && (
        <p className="PopUp--warning">Nie możesz wykonać tej akcji</p>
      )}
    </>
  );
};

export default PopUp;
