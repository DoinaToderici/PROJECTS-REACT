import React, { useState, useContext } from "react";
import { StepsValidationContext } from "../../../Context/MultiStepsValidationContext";
import "./Form.scss";

function Preferencies(props) {
  const { calculProgressLine, calculDecreaseProgressLine } = useContext(
    StepsValidationContext
  );

  const [dataPref, setDataPref] = useState({
    prefs: {
      love: "",
      hate: "",
    },
  });

  const preventFunction = (e) => {
    e.preventDefault();
    calculProgressLine();
    props.modifyIndex(6, dataPref);
  };

  const heandleTxtArea = (e, pref) => {
    if (pref === "love") {
      setDataPref({
        prefs: {
          ...dataPref.prefs,
          love: e.target.value,
        },
      });
    }

    if (pref === "hate") {
      setDataPref({
        prefs: {
          ...dataPref.prefs,
          hate: e.target.value,
        },
      });
    }
  };
  return (
    <div className="form col-12 col-lg-6">
      <h2 className="mb-4">
        Parle-nous des aliments que tu préfères et que tu détestes !
      </h2>
      <form onSubmit={preventFunction}>
        <div className="d-flex flex-column text-start">
          <div className="mb-4">
            <label htmlFor="hateFood">
              Tes aliments préférés, separés par une virgule :
            </label>
            <textarea
              onChange={(e) => {
                heandleTxtArea(e, "love");
              }}
              id="hateFood"
              placeholder="Un ou plusieurs aliments..."
            />
          </div>
          <div>
            <label htmlFor="loveFood">
              Les aliments que tu supportes pas, separés par une virgule :
            </label>
            <textarea
              onChange={(e) => {
                heandleTxtArea(e, "hate");
              }}
              id="loveFood"
              placeholder="Un ou plusieurs aliments..."
            />
          </div>
        </div>
        <div className="btn-container d-flex mt-5">
          <button
            type="button"
            className="btn"
            onClick={() => {
              props.modifyIndex(4);
              calculDecreaseProgressLine();
            }}
          >
            Precedent
          </button>
          <button className="btn ">Valider</button>
        </div>
      </form>
    </div>
  );
}

export default Preferencies;
