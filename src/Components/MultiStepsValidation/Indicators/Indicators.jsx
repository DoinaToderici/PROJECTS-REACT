import React, { useContext } from "react";
import "./Indicators.scss";
import alergy from "../../../assets/Images/MultiStepsValidation/Icons/alergy.svg";
import health from "../../../assets/Images/MultiStepsValidation/Icons/health.svg";
import preferency from "../../../assets/Images/MultiStepsValidation/Icons/preferency.svg";
import validation from "../../../assets/Images/MultiStepsValidation/Icons/validation.svg";
import vegetable from "../../../assets/Images/MultiStepsValidation/Icons/vegetable.svg";
import { StepsValidationContext } from "../../../Context/MultiStepsValidationContext";

const Indicators = (props) => {
  const { progressLine } = useContext(StepsValidationContext);
  return (
    <div className="indicators-container">
      <div className="lines-container">
        <div
          style={{ width: `${progressLine}%` }}
          className={progressLine > 0 ? `upper-line line` : "line"}
        ></div>
        <div className="lower-line line"></div>
      </div>
      <div className="container-img">
        <div className="d-flex justify-content-between w-100">
          <div
            className={
              props.formIndex === 2 ? "block-image active-step" : "block-image"
            }
          >
            <img src={health} alt={`Icon ${vegetable}`} />
          </div>
          <div
            className={
              props.formIndex === 3 ? "block-image active-step" : "block-image"
            }
          >
            <img src={vegetable} alt={`Icon ${health}`} />
          </div>
          <div
            className={
              props.formIndex === 4 ? "block-image active-step" : "block-image"
            }
          >
            <img src={alergy} alt={`Icon ${alergy}`} />
          </div>
          <div
            className={
              props.formIndex === 5 ? "block-image active-step" : "block-image"
            }
          >
            <img src={preferency} alt={`Icon ${preferency}`} />
          </div>
          <div
            className={
              props.formIndex === 6 ? "block-image active-step" : "block-image"
            }
          >
            <img src={validation} alt={`Icon ${validation}`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Indicators;
