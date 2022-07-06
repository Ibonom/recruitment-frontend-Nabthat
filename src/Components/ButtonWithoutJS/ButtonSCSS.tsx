import "../../Sass/components/Arrow.scss";
import "../../Sass/components/button.scss";
import ListFooter from "../FooterList/ListFooter";

const ButtonSCSS = () => {
  return (
    <>
      <label htmlFor="buttonSCSS" className="button--footer">
        POKAŻ <i className="arrow--up"></i>
      </label>
      <input
        id="buttonSCSS"
        type="checkbox"
        style={{ display: "none" }}
      ></input>
      <ListFooter />
    </>
  );
};

export default ButtonSCSS;
