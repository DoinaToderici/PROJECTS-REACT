import React, { createContext, useState } from "react";

export const StepsValidationContext = createContext();

const MultiStepsValidationContext = (props) => {
  const [progressLine, setProgressLine] = useState(0);

  const calculProgressLine = () => {
    if (progressLine !== 100) {
      setProgressLine(progressLine + 25);
    } else {
      return;
    }
  };

  const calculDecreaseProgressLine = () => {
    if (progressLine === 25 || progressLine > 25) {
      setProgressLine(progressLine - 25);
    } else {
      return;
    }
  };

  return (
    <StepsValidationContext.Provider
      value={{
        progressLine,
        calculProgressLine,
        calculDecreaseProgressLine,
      }}
    >
      {props.children}
    </StepsValidationContext.Provider>
  );
};

export default MultiStepsValidationContext;
