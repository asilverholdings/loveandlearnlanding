import React from "react";
import { ProgressBar, Step } from "react-step-progress-bar";

const MultiStepProgressBar = ({ currentStep, totalSteps, onPageNumberClick }) => {
  // Dynamically calculate the percentage based on current step and total steps
  const stepPercentage = ((currentStep - 1) * 100) / totalSteps;

  return (
    <ProgressBar percent={stepPercentage}>
      {/* Dynamically generate the steps based on the total number of steps */}
      {Array.from({ length: totalSteps }, (_, index) => (
        <Step key={index}>
          {({ accomplished }) => (
            <div
              className={`indexedStep ${accomplished ? "accomplished" : ""}`}
              onClick={() => onPageNumberClick(index + 1)}
            >
              {index + 1}
            </div>
          )}
        </Step>
      ))}
    </ProgressBar>
  );
};

export default MultiStepProgressBar;
