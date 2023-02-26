import "./App.scss";
import React from "react";
import MultiLanguages from "./Components/MultiLanguages/multiLanguages";
import ToogleButtons from "./Components/MultiLanguages/toogleButtons";
import TranslationContextProvider from "./Context/TranslationContext";

function App() {
  return (
    <TranslationContextProvider>
      <div className="app container py-5">
        <ToogleButtons />
        <MultiLanguages />
      </div>
    </TranslationContextProvider>
  );
}

export default App;
