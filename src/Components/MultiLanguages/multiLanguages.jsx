import React, { useContext } from "react";
import data from "../../assets/Datas/datas-languages.jsx";
import { TranslationContext } from "../../Context/TranslationContext";

function MultiLanguages() {
  const { lang } = useContext(TranslationContext);

  return (
    <div className="text-center">
      <h1>
        <b>{data[lang].title}</b>
      </h1>
      <h3>{data[lang].txt}</h3>
    </div>
  );
}

export default MultiLanguages;
