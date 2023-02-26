import React, { useContext } from "react";
import "./toogleButtons.scss";
import FrFlag from "../../assets/Images/img-languages/fr-flag.svg";
import EsFlag from "../../assets/Images/img-languages/es-flag.svg";
import EnFlag from "../../assets/Images/img-languages/en-flag.svg";
import { TranslationContext } from "../../Context/TranslationContext";

function ToogleButtons() {
  const { toogleLang } = useContext(TranslationContext);

  return (
    <div className="toogle-buttons-container">
      <img
        src={FrFlag}
        alt="FR flag image"
        onClick={() => {
          toogleLang("FR");
        }}
      />
      <img
        src={EnFlag}
        alt="EN  flag image"
        onClick={() => {
          toogleLang("EN");
        }}
      />
      <img
        src={EsFlag}
        alt="ES  flag image"
        onClick={() => {
          toogleLang("ES");
        }}
      />
    </div>
  );
}

export default ToogleButtons;
