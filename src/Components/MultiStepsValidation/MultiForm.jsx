import React, { useState } from "react";
import Indicators from "./Indicators/Indicators";
import CardBegin from "./Infos/CardBegin";
import CardEnd from "./Infos/CardEnd";
import DietForm from "./SubForms/DietForm";
import FoodStyle from "./SubForms/FoodStyle";
import Alergies from "./SubForms/Alergies";
import Preferencies from "./SubForms/Preferencies";

import MultiStepsValidationContext from "../../Context/MultiStepsValidationContext";
import "./MultiForm.scss";

const MultiForm = () => {
  const [formIndex, setFormIndex] = useState(1);
  const [allFormData, setAllFormData] = useState({
    dietForm: "",
    foodStyle: [],
    allergies: [],
    prefs: {},
  });

  const modifyIndex = (index, data) => {
    setFormIndex(index);

    if (data) {
      const newData = { ...allFormData };
      const firstPropNewData = Object.keys(data)[0];
      newData[firstPropNewData] = data[firstPropNewData];
      setAllFormData(newData);
    }
  };

  return (
    <MultiStepsValidationContext>
      <div className="multiform-container container py-5">
        <Indicators formIndex={formIndex} />
        {formIndex === 1 ? (
          <CardBegin modifyIndex={modifyIndex} />
        ) : formIndex === 2 ? (
          <DietForm modifyIndex={modifyIndex} />
        ) : formIndex === 3 ? (
          <FoodStyle modifyIndex={modifyIndex} />
        ) : formIndex === 4 ? (
          <Alergies modifyIndex={modifyIndex} />
        ) : formIndex === 5 ? (
          <Preferencies modifyIndex={modifyIndex} />
        ) : (
          <CardEnd yourTastes={allFormData} />
        )}
      </div>
    </MultiStepsValidationContext>
  );
};

export default MultiForm;
