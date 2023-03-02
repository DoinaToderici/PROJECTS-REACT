import React, { useContext, useState } from "react";
import { StepsValidationContext } from "../../../Context/MultiStepsValidationContext";
import "./Form.scss";

const DietForm = (props) => {
  const { progressLine, calculProgressLine } = useContext(
    StepsValidationContext
  );
  const [formData, setFormData] = useState({ dietForm: "" });

  const preventFunction = (e) => {
    e.preventDefault();
  };
  const handleRadio = (e) => {
    setFormData({ dietForm: e.target.value });
  };

  return (
    <div className="form col-12 col-lg-6">
      <h2>Quelle est ton régim alimentaire ?</h2>
      <form onSubmit={preventFunction} className="diet-form text-left">
        <div className="d-flex">
          <input
            onChange={handleRadio}
            type="radio"
            name="diet"
            id="nodiet"
            value="nodiet"
          />
          <label htmlFor="nodiet" className="ms-2">
            Pas de régim particulier
          </label>
        </div>
        <div className="d-flex">
          <input
            onChange={handleRadio}
            type="radio"
            name="diet"
            id="homnivorus"
            value="homnivorus"
          />
          <label htmlFor="homnivorus" className="ms-2">
            Homnivore
          </label>
        </div>
        <div className="d-flex">
          <input
            onChange={handleRadio}
            type="radio"
            name="diet"
            id="vegetarian"
            value="vegetarian"
          />
          <label htmlFor="vegetarian" className="ms-2">
            Vegétarien
          </label>
        </div>
        <div className="d-flex">
          <input
            onChange={handleRadio}
            type="radio"
            name="diet"
            id="vegan"
            value="vegan"
          />
          <label htmlFor="vegan" className="ms-2">
            Vegan
          </label>
        </div>
        <button
          className="btn mt-5"
          onClick={() => {
            calculProgressLine(), props.modifyIndex(3, formData);
          }}
        >
          Valider
        </button>
      </form>
    </div>
  );
};

export default DietForm;
