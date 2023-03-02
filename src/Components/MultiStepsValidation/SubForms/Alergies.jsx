import React, { useRef, useContext } from "react";
import { StepsValidationContext } from "../../../Context/MultiStepsValidationContext";
import "./Form.scss";

const Alergies = (props) => {
  const { calculProgressLine, calculDecreaseProgressLine } = useContext(
    StepsValidationContext
  );
  const preventFunction = (e) => {
    e.preventDefault();

    const alergiesData = { allergies: [] };

    allCheckboxes.current.forEach((checkbox) => {
      if (checkbox.checked) {
        alergiesData.allergies.push(checkbox.value);
      }
      props.modifyIndex(5, alergiesData);
    });
  };

  const allCheckboxes = useRef([]);

  const addCheckbox = (el) => {
    if (el && !allCheckboxes.current.includes(el)) {
      !allCheckboxes.current.push(el);
    }
  };

  return (
    <div className="form col-12 col-lg-6">
      <h2>As-tu des allergies ?</h2>
      <form onSubmit={preventFunction} className="alergies-form text-left">
        <div className="d-flex">
          <input ref={addCheckbox} type="checkbox" id="lait" value="lait" />
          <label htmlFor="lait" className="ms-2">
            Lait
          </label>
        </div>
        <div className="d-flex">
          <input ref={addCheckbox} type="checkbox" id="pollen" value="pollen" />
          <label htmlFor="pollen" className="ms-2">
            Pollen
          </label>
        </div>
        <div className="d-flex">
          <input ref={addCheckbox} type="checkbox" id="noix" value="noix" />
          <label htmlFor="noix" className="ms-2">
            Noix
          </label>
        </div>
        <div className="d-flex">
          <input ref={addCheckbox} type="checkbox" id="oeufs" value="oeufs" />
          <label htmlFor="oeufs" className="ms-2">
            Oeufs
          </label>
        </div>
        <div className="d-flex">
          <input
            ref={addCheckbox}
            type="checkbox"
            id="fruits-de-mer"
            value="Fruits de mer"
          />
          <label htmlFor="fruits-de-mer" className="ms-2">
            Fruits de mer
          </label>
        </div>
        <div className="btn-container d-flex mt-5">
          <button
            type="button"
            className="btn"
            onClick={() => {
              props.modifyIndex(3);
              calculDecreaseProgressLine();
            }}
          >
            Precedent
          </button>
          <button
            className="btn"
            onClick={() => {
              calculProgressLine();
            }}
          >
            Valider
          </button>
        </div>
      </form>
    </div>
  );
};

export default Alergies;
