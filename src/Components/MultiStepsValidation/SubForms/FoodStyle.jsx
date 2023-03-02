import React, { useRef, useContext } from "react";
import { StepsValidationContext } from "../../../Context/MultiStepsValidationContext";
import "./Form.scss";

const FoodStyle = (props) => {
  const { calculDecreaseProgressLine, calculProgressLine } = useContext(
    StepsValidationContext
  );
  const preventFunction = (e) => {
    e.preventDefault();

    const styleData = { foodStyle: [] };

    allCheckboxes.current.forEach((checkbox) => {
      if (checkbox.checked) {
        styleData.foodStyle.push(checkbox.value);
      }
      props.modifyIndex(4, styleData);
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
      <h2>Quelle sont tes cuisines préferées ?</h2>
      <form onSubmit={preventFunction} className="diet-form text-left">
        <div className="d-flex">
          <input
            ref={addCheckbox}
            type="checkbox"
            id="italian"
            value="italian"
          />
          <label htmlFor="italian" className="ms-2">
            Italienne
          </label>
        </div>
        <div className="d-flex">
          <input ref={addCheckbox} type="checkbox" id="japon" value="japon" />
          <label htmlFor="japon" className="ms-2">
            Japonaise
          </label>
        </div>
        <div className="d-flex">
          <input ref={addCheckbox} type="checkbox" id="indien" value="indien" />
          <label htmlFor="indien" className="ms-2">
            Indienne
          </label>
        </div>
        <div className="d-flex">
          <input ref={addCheckbox} type="checkbox" id="thai" value="thai" />
          <label htmlFor="thai" className="ms-2">
            Thailandaise
          </label>
        </div>
        <div className="d-flex">
          <input ref={addCheckbox} type="checkbox" id="french" value="french" />
          <label htmlFor="french" className="ms-2">
            Française
          </label>
        </div>
        <div className="d-flex">
          <input
            ref={addCheckbox}
            type="checkbox"
            id="chinese"
            value="chinese"
          />
          <label htmlFor="chinese" className="ms-2">
            Chinoise
          </label>
        </div>
        <div className="btn-container d-flex mt-5">
          <button
            type="button"
            className="btn"
            onClick={() => {
              props.modifyIndex(2);
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

export default FoodStyle;
