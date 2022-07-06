import "../../Sass/components/buttonList.scss";
import "../../Sass/components/Arrow.scss";

const ListFooter = () => {
  return (
    <ul className="listWrapper">
      <li className="buttonListContainer">
        <button className="buttonListContainer__button">
          <i className="arrow--right"></i>ZRESETUJ USTAWIENIA
        </button>
      </li>
      <li className="buttonListContainer">
        <button className="buttonListContainer__button">
          <i className="arrow--right"></i>POKAŻ DANE OSOBOWE
        </button>
      </li>
    </ul>
  );
};

export default ListFooter;
