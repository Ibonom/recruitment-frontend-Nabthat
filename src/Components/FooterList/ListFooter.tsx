import "../../Sass/components/buttonList.scss";
import "../../Sass/components/Arrow.scss";
import { useContext } from "react";
import DataContext from "../../Context/DataProvider";
const ListFooter = () => {
    const ctx = useContext(DataContext);
    const nameHandler=  () =>{
        ctx.setName('Dawid Gucwa')
    }
    const resetHandler = () =>{
        ctx.reset();
    }
  return (
    <ul className="listWrapper">
      <li className="buttonListContainer">
        <button className="buttonListContainer__button" onClick={resetHandler}>
          <i className="arrow--right"></i>ZRESETUJ USTAWIENIA
        </button>
      </li>
      <li className="buttonListContainer">
        <button className="buttonListContainer__button" onClick={nameHandler}>
          <i className="arrow--right"></i>POKAŻ DANE OSOBOWE
        </button>
      </li>
    </ul>
  );
};

export default ListFooter;
