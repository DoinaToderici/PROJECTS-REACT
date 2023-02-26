import React, { createContext, useState } from "react";

export const TranslationContext = createContext();

const supportedLangs = ["FR", "EN", "ES"];
let browserLang = navigator.language.toUpperCase();

if (!supportedLangs.includes(browserLang)) {
  browserLang = "EN";
}
function TranslationContextProvider(props) {
  const [lang, setLang] = useState(browserLang);
  const toogleLang = (changelang) => {
    setLang(changelang);
  };

  return (
    <TranslationContext.Provider value={{ lang, toogleLang }}>
      {props.children}
    </TranslationContext.Provider>
  );
}

export default TranslationContextProvider;
