import React from "react";
import "../../Sass/components/button.scss";

const Button: React.FC<{
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}> = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className="button">
      {text}
    </button>
  );
};

export default Button;
