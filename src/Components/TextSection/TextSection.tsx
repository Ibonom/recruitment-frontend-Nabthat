import { useContext } from "react";
import "../../Sass/layout/DynamicTextSection.scss";
import DataContext from "../../Context/DataProvider";
const TextSection = () => {
  const dataContext = useContext(DataContext);
  return (
    <article className="dynamicTextSection">
      <h3 className="dynamicTextSection__tittle">
        BLOK Z DŁUGĄ NAZWĄ KTÓRA SAMA SIE PRZYTNIE TEN TEKST NIE POWINIEN BYC
        WIDOCZNY
      </h3>
      <p className="dynamicTextSection__txt">
        {dataContext.showData.sort((a,b)=>a.text.localeCompare(b.text)).map((object) => (
          <p key={object.id}>{object.text}</p>
        ))}
      </p>
    </article>
  );
};

export default TextSection;
